package com.ThirdParty.Model;

public class Lokasi {
    int id_lokasi;
    String nama_rumah_makan;
    //Setter dan Getter

    //Steter

    public void setId_lokasi(int id_lokasi) {
        this.id_lokasi = id_lokasi;
    }

    public void setNama_rumah_makan(String nama_rumah_makan) {
        this.nama_rumah_makan = nama_rumah_makan;
    }

    //Getter

    public int getId_lokasi() {
        return id_lokasi;
    }

    public String getNama_rumah_makan() {
        return nama_rumah_makan;
    }

    //To String

    @Override
    public String toString() {
        return "Lokasi{" +
                "id_lokasi=" + id_lokasi +
                ", nama_rumah_makan='" + nama_rumah_makan + '\'' +
                '}';
    }
}
