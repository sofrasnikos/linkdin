package com.linkdin.app.model;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

public class PostPK implements Serializable {
    private int postId;
    private int userUserId;

    @Column(name = "post_id")
    @Id
    public int getPostId() {
        return postId;
    }

    public void setPostId(int postId) {
        this.postId = postId;
    }

    @Column(name = "User_user_id")
    @Id
    public int getUserUserId() {
        return userUserId;
    }

    public void setUserUserId(int userUserId) {
        this.userUserId = userUserId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PostPK postPK = (PostPK) o;
        return postId == postPK.postId &&
                userUserId == postPK.userUserId;
    }

    @Override
    public int hashCode() {

        return Objects.hash(postId, userUserId);
    }
}