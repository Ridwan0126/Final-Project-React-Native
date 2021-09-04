package com.DB.Model;

public class Register {
    //Untuk Register Pada User
    String username;
    String email;
    String password;
    String message;

    //Setter dan Getter

    //Setter

    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    //Getter

    public String getUsername() {
        return username;
    }


    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }


    public String getMessage() {
        return message;
    }

    //Get Respon Message

    public String getResponseMessage() {
        return message;
    }

}
