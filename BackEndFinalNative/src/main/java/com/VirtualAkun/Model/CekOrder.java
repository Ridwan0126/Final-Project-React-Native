package com.VirtualAkun.Model;

public class CekOrder {
    String user;
    String menu;
    int quantity;
    float price;
    String status;
    //Setter dan Getter

    //Setter

    public void setUser(String user) {
        this.user = user;
    }

    public void setMenu(String menu) {
        this.menu = menu;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    //Getter

    public String getUser() {
        return user;
    }

    public String getMenu() {
        return menu;
    }

    public int getQuantity() {
        return quantity;
    }

    public float getPrice() {
        return price;
    }

    public String getStatus() {
        return status;
    }

}
