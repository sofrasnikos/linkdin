import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  userId = localStorage.getItem('userID');
  userToken = localStorage.getItem('userToken');

  pendingRequests = [];
  totalPendingRequests = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  getPendingConnectRequests() {
    this.pendingRequests = [];
    this.totalPendingRequests = 0;
    const userIdentifiers = { userToken: this.userToken, id: this.userId };
    const API_URL = environment.API_URL;
    const req = this.http.post(API_URL + '/api/getconnectrequests', {
      userIdentifiers,
    }, { responseType: 'text', withCredentials: true }).subscribe((data: any) => {
      const obj = JSON.parse(data);
      console.log(obj.numberOfResults);
      this.totalPendingRequests = obj.numberOfResults;
      if (this.totalPendingRequests > 0) {
        for (let i = 0; i < this.totalPendingRequests; i++) {
          this.pendingRequests.push(obj.list[i]);
          this.pendingRequests[i].image = 'data:image/jpeg;base64,' + this.pendingRequests[i].image;
        }
      }
      console.log(this.pendingRequests);
    },
      (err: HttpErrorResponse) => {
        console.log(err);
      });
  }

  acceptConnectRequest(index) {
    const userIdentifiers = { userToken: this.userToken, id: this.userId };
    const connectRequest = { profileUserID: this.pendingRequests[index].id, accepted: '1' };
    const API_URL = environment.API_URL;
    const req = this.http.post(API_URL + '/api/handleconnectrequest', {
      userIdentifiers,
      connectRequest
    }, { responseType: 'text', withCredentials: true }).subscribe((data: any) => {
    },
      (err: HttpErrorResponse) => {
        console.log(err);
      });
  }

  declineConnectRequest(index) {
    const userIdentifiers = { userToken: this.userToken, id: this.userId };
    const connectRequest = { profileUserID: this.pendingRequests[index].id, accepted: '0' };
    const API_URL = environment.API_URL;
    const req = this.http.post(API_URL + '/api/handleconnectrequest', {
      userIdentifiers,
      connectRequest
    }, { responseType: 'text', withCredentials: true }).subscribe((data: any) => {
    },
      (err: HttpErrorResponse) => {
        console.log(err);
      });
  }

}
