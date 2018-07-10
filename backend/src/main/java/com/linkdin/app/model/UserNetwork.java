package com.linkdin.app.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "user_network", schema = "web_dev_db", catalog = "")
@IdClass(UserNetworkPK.class)
public class UserNetwork {
    private int id;
    private String user1;
    private String user2;
    private Byte isAccepted;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Id
    @Column(name = "user_1")
    public String getUser1() {
        return user1;
    }

    public void setUser1(String user1) {
        this.user1 = user1;
    }

    @Id
    @Column(name = "user_2")
    public String getUser2() {
        return user2;
    }

    public void setUser2(String user2) {
        this.user2 = user2;
    }

    @Basic
    @Column(name = "is_accepted")
    public Byte getIsAccepted() {
        return isAccepted;
    }

    public void setIsAccepted(Byte isAccepted) {
        this.isAccepted = isAccepted;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserNetwork that = (UserNetwork) o;
        return id == that.id &&
                Objects.equals(user1, that.user1) &&
                Objects.equals(user2, that.user2) &&
                Objects.equals(isAccepted, that.isAccepted);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, user1, user2, isAccepted);
    }
}
