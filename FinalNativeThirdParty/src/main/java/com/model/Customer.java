package com.model;

public class Customer {
    private int id;
    private String nama;
    private String nop;
    private String alamat;
    private String alamatobjekpajak;
    private String tahunpembayaran;
    private String jatuhtempopembayaran;
    private String estimasitanggalproses;
    private String jumlahtagihan;
    private String status;
    private String jenis;


    //

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNama() {
        return nama;
    }

    public void setNama(String nama) {
        this.nama = nama;
    }

    public String getNop() {
        return nop;
    }

    public void setNop(String nop) {
        this.nop = nop;
    }

    public String getAlamat() {
        return alamat;
    }

    public void setAlamat(String alamat) {
        this.alamat = alamat;
    }

    public String getAlamatobjekpajak() {
        return alamatobjekpajak;
    }

    public void setAlamatobjekpajak(String alamatobjekpajak) {
        this.alamatobjekpajak = alamatobjekpajak;
    }

    public String getTahunpembayaran() {
        return tahunpembayaran;
    }

    public void setTahunpembayaran(String tahunpembayaran) {
        this.tahunpembayaran = tahunpembayaran;
    }

    public String getJatuhtempopembayaran() {
        return jatuhtempopembayaran;
    }

    public void setJatuhtempopembayaran(String jatuhtempopembayaran) {
        this.jatuhtempopembayaran = jatuhtempopembayaran;
    }

    public String getEstimasitanggalproses() {
        return estimasitanggalproses;
    }

    public void setEstimasitanggalproses(String estimasitanggalproses) {
        this.estimasitanggalproses = estimasitanggalproses;
    }

    public String getJumlahtagihan() {
        return jumlahtagihan;
    }

    public void setJumlahtagihan(String jumlahtagihan) {
        this.jumlahtagihan = jumlahtagihan;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getJenis() {
        return jenis;
    }

    public void setJenis(String jenis) {
        this.jenis = jenis;
    }


    //

    public Customer(){}

    //

    public Customer(int id, String nama,String alamat, String nop, String alamatobjekpajak,String tahunpembayaran, String jatuhtempopembayaran, String estimasitanggalproses, String jumlahtagihan, String status,String jenis){
        this.id = id;
        this.nama = nama;
        this.alamat = alamat;
        this.jenis = jenis;
        this.nop = nop;
        this.alamatobjekpajak = alamatobjekpajak;
        this.tahunpembayaran = tahunpembayaran;
        this.jatuhtempopembayaran = jatuhtempopembayaran;
        this.estimasitanggalproses = estimasitanggalproses;
        this.jumlahtagihan = jumlahtagihan;
        this.status = status;
    }
}
