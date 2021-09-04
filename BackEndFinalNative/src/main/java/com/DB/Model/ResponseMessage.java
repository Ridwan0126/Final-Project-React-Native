package com.DB.Model;

public class ResponseMessage {
    //Respon Message
    private String message;

    public ResponseMessage(String responseMessage){
        this.message = responseMessage;
    }

    public String getResponseMessage() {
        return message;
    }
}
