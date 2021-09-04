package com.RestApiProduct.Controllers;

import com.google.gson.Gson;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeoutException;
import java.util.stream.Collectors;

import com.DB.Model.Register;
import com.DB.Model.User;
import com.RestApiProduct.Service.RestApiReceive;
import com.RestApiProduct.Service.RestApiSend;
import com.ThirdParty.Service.ThirdPartyService;

@RestController
public class UserController {
    RestApiSend restApiSend = new RestApiSend();
    RestApiReceive restApiReceive = new RestApiReceive();
    @Autowired
    ThirdPartyService thirdPartyService;

    @PostMapping("User/Regiter")
    public String registrasi(@RequestParam("username") String username,
                             @RequestParam("password") String password,
                             @RequestParam("email") String email) throws IOException, TimeoutException {

        Register user = new Register();
        user.setUsername(username);
        user.setPassword(password);
        user.setEmail(email);
        user.setMessage("Registrasi " + username +" Success");

        String data = user.getResponseMessage();

        try {
            restApiSend.insertUser(new Gson().toJson(user));
        }catch (Exception e){
            System.out.println("error = " + e);
        }
        delay();
        return restApiReceive.receiveFromRegistrasi();
    }

    @PostMapping("User/Login")
    public String login(@RequestParam("email") String email,
                        @RequestParam("password") String password) throws IOException, TimeoutException {
        String token = getJWTToken(email);
        User user = new User();
        user.setEmail(email);
        user.setPassword(password);
        user.setToken(token);

        User data = new User(email, password, token);
        data.getEmail();
        data.getPassword();
        data.getToken();

        try {
            restApiSend.loginUser(new Gson().toJson(data));
        } catch (Exception e){
            System.out.println("Error = " + e);
        }
        delay();
        return restApiReceive.receiveFromDatabase();
    }

    private String getJWTToken(String username) {
        String secretKey = "mySecretKey";
        List<GrantedAuthority> grantedAuthorities = AuthorityUtils
                .commaSeparatedStringToAuthorityList("ROLE_USER");

        String token = Jwts
                .builder()
                .setId("softtekJWT")
                .setSubject(username)
                .claim("authorities",
                        grantedAuthorities.stream()
                                .map(GrantedAuthority::getAuthority)
                                .collect(Collectors.toList()))
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 600000))
                .signWith(SignatureAlgorithm.HS512,
                        secretKey.getBytes()).compact();

        return "Token " + token;
    }
    private static void delay() {
        try {
            Thread.sleep(5000);
        } catch (InterruptedException _ignored) {
            Thread.currentThread().interrupt();
        }
    }
}
