package com.VirtualAkun.Model;

public class Payment {
    int id;
    String user;
    String  menu;
    int quantity;
    float price;


    //setter and getter

    //Setter

    public void setId(int id) {
        this.id = id;
    }

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

    //Getter

    public int getId() {
        return id;
    }

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

}
