package com.DB.Model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

public class User {
    @GeneratedValue(strategy = GenerationType.AUTO)

    // User
    private int id_user;
    private String username;
    private String email;
    private String password;
    private String token;
    private String message;

    //Setter dan Getter

    //Setter

    public void setId_user(int id_user) {
        this.id_user = id_user;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    //Getter

    public int getId_user() {
        return id_user;
    }


    public String getUsername() {
        return username;
    }


    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getToken() {
        return token;
    }

    public String getMessage() {
        return message;
    }

    //User Public

    public User(String email, String password, String token) {
        this.email = email;
        this.password = password;
        this.token = token;
    }

    public User() {
    }

    //To String User


    @Override
    public String toString() {
        return "User{" +
                "id_user=" + id_user +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", token='" + token + '\'' +
                ", message='" + message + '\'' +
                '}';
    }
}
