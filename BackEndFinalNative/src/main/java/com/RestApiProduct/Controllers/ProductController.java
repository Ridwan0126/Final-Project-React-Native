package com.RestApiProduct.Controllers;

import com.google.gson.Gson;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import com.RestApiProduct.Service.RestApiReceive;
import com.RestApiProduct.Service.RestApiSend;
import com.ThirdParty.Model.Data;
import com.ThirdParty.Model.Lokasi;
import com.VirtualAkun.Model.Payment;
import com.VirtualAkun.Model.CekOrder;
import com.ThirdParty.Service.ThirdPartyService;

@RestController
@RequestMapping(value = "/Product")
public class ProductController {
    private final String HEADER = "Authorization";
    private final String PREFIX = "Token ";
    private final String SECRET = "mySecretKey";

    RestApiSend restApiSend = new RestApiSend();
    RestApiReceive restApiReceive = new RestApiReceive();

    @Autowired
    ThirdPartyService thirdPartyService;

    //VIEW ALL DATA
    @RequestMapping(value = "/View/All", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<List<Data>> listAll(@RequestHeader("Authorization") String header) throws IOException {
        String jwtToken = header.replace(PREFIX, "");
        Claims claims = Jwts.parser().setSigningKey(SECRET.getBytes()).parseClaimsJws(jwtToken).getBody();
        String user = claims.get("sub").toString();

        List<Data> data = Arrays.asList(thirdPartyService.viewALL());
        if (data.isEmpty()) {
            return new ResponseEntity<>(data, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    //VIEW DATA BY LOKASI
    @RequestMapping(value = "/View/Lokasi", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<List<Lokasi>> viewbylokasi(@RequestBody Lokasi lokasi) throws IOException {

        List<Lokasi> data = Arrays.asList(thirdPartyService.getDataByLokasi(lokasi));
        if (data.isEmpty()) {
            return new ResponseEntity<>(data, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @RequestMapping(value = "/Order", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<?> insertSiswa(@RequestBody CekOrder cekOrder, @RequestHeader("Authorization") String header) {
        String jwtToken = header.replace(PREFIX, "");
        Claims claims = Jwts.parser().setSigningKey(SECRET.getBytes()).parseClaimsJws(jwtToken).getBody();
        String user = claims.get("sub").toString();
        cekOrder.setUser(user);

        try {
            restApiSend.insertOrder(new Gson().toJson(cekOrder));
            restApiReceive.receiveFromDatabase();
        } catch (Exception e) {
            System.out.println("error = " + e);
        }
        return new ResponseEntity<>("Order success... Lakukan pembayaran di /Product/Payment", HttpStatus.OK);
    }

    @RequestMapping(value = "/Payment", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<?> order(@RequestBody Payment payment, @RequestHeader("Authorization") String header) {

        String jwtToken = header.replace(PREFIX, "");
        Claims claims = Jwts.parser().setSigningKey(SECRET.getBytes()).parseClaimsJws(jwtToken).getBody();
        String currentLoggedUser = claims.get("sub").toString();

        payment.setUser(currentLoggedUser);
        try {
            thirdPartyService.createPostWithObject(payment);
            restApiSend.updateOrder(new Gson().toJson(payment)); //Update tbl_order_sementara
            restApiReceive.receiveFromDatabase();
        } catch (Exception e) {
            System.out.println("error = " + e);
        }
        return new ResponseEntity<>(payment, HttpStatus.OK);
    }
}
