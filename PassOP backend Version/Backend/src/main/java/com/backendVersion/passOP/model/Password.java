package com.backendVersion.passOP.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Password {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Integer id;
    private  String site;
    private  String username;
    private  String password;
    public Password(Integer id, String site, String username, String password) {
        this.id = id;
        this.site = site;
        this.username = username;
        this.password = password;
    }

    public Password() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Password{" +
                "id=" + id +
                ", site='" + site + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
