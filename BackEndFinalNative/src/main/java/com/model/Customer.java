package com.model;

import javax.persistence.*;

@Entity
@Table(name = "pelanggan")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "nama")
    private String nama;

    @Column(name = "nop")
    private String nop;

    @Column(name = "jenis")
    private String jenis;

    @Column(name = "alamat")
    private String alamat;

    @Column(name = "objek")
    private String objek;

    @Column(name = "tahun")
    private String tahun;

    @Column(name = "tagihan")
    private int tagihan;

    @Column(name = "estimasi")
    private String estimasi;

    @Column(name = "tempo")
    private String tempo;

    @Column(name = "status")
    private String status;

    @Column(name = "admin")
    private int admin;

    @Column(name = "keterlambatan")
    private int keterlambatan;

    @Column(name = "telat")
    private String telat;

    public Customer(){

    }

    public Customer(String nama, String nop, String jenis, String alamat, String objek, String tahun,int tagihan,String estimasi,String tempo,String status, int admin,int keterlambatan, String telat){
        super();
        this.nama = nama;
        this.nop = nop;
        this.jenis = jenis;
        this.alamat = alamat;
        this.objek = objek;
        this.tahun = tahun;
        this.tagihan = tagihan;
        this.estimasi = estimasi;
        this.tempo = tempo;
        this.status = status;
        this.admin = admin;
        this.keterlambatan = keterlambatan;
        this.telat = telat;
    }
    //setter getter


    public long getId() {
        return id;
    }

    public void setId(long id) {
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

    public String getJenis() {
        return jenis;
    }

    public void setJenis(String jenis) {
        this.jenis = jenis;
    }

    public String getAlamat() {
        return alamat;
    }

    public void setAlamat(String alamat) {
        this.alamat = alamat;
    }

    public String getObjek() {
        return objek;
    }

    public void setObjek(String objek) {
        this.objek = objek;
    }

    public String getTahun() {
        return tahun;
    }

    public void setTahun(String tahun) {
        this.tahun = tahun;
    }

    public int getTagihan() {
        return tagihan;
    }

    public void setTagihan(int tagihan) {
        this.tagihan = tagihan;
    }

    public String getEstimasi() {
        return estimasi;
    }

    public void setEstimasi(String estimasi) {
        this.estimasi = estimasi;
    }

    public String getTempo() {
        return tempo;
    }

    public void setTempo(String tempo) {
        this.tempo = tempo;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getAdmin() {
        return admin;
    }

    public void setAdmin(int admin) {
        this.admin = admin;
    }

    public int getKeterlambatan() {
        return keterlambatan;
    }

    public void setKeterlambatan(int keterlambatan) {
        this.keterlambatan = keterlambatan;
    }

    public String getTelat() {
        return telat;
    }

    public void setTelat(String telat) {
        this.telat = telat;
    }
}
