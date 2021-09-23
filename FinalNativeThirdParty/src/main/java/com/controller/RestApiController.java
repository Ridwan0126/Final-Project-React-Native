package com.controller;

import com.model.Customer;
import com.Repository.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000",allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class RestApiController {

    //

    @Autowired
    CustomerRepository customerRepos;

    //

    @RequestMapping(value = "/customer/invoice/{id}", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<List<Customer>> cekInvoice(@PathVariable Long id) {
        List<Customer> listInvoice = customerRepos.findInvoice(id);

        if (listInvoice != null) {
            return new ResponseEntity<>(listInvoice, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(listInvoice, HttpStatus.NOT_FOUND);
        }
    }

    private static void delay() {
        try {
            Thread.sleep(30000);
        } catch (InterruptedException _ignored) {
            Thread.currentThread().interrupt();
        }
    }
}
