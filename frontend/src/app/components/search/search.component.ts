import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  userId = localStorage.getItem('userID');
  userToken = localStorage.getItem('userToken');

  faSearch = faSearch;
  totalResults = 0;
  results = [];
  userQuery: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  search() {
    this.results = [];
    console.log(this.userQuery);
    if (this.userQuery) {
      const userIdentifiers = { userToken: this.userToken, id: this.userId };
      const searchData = { searchQuery: this.userQuery };
      const req = this.http.post('http://localhost:8080/api/searchusers', {
        userIdentifiers,
        searchData
      }, { responseType: 'text', withCredentials: true }).subscribe((data: any) => {
        console.log(data);
        const obj = JSON.parse(data);
        this.totalResults = obj.numberOfResults;
        if (this.totalResults > 0) {
          for (let i = 0; i < this.totalResults; i++) {
            this.results.push(obj.list[i]);
          }
          console.log(this.results);
        }
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        });
    }
  }

  redirectToSearchedProfile(profileId) {
    this.router.navigate(['/users', profileId]);
  }

}
