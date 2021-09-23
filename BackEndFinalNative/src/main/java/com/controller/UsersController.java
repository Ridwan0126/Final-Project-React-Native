package com.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.exception.ResourceNotFoundException;
import com.model.Users;
import com.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class UsersController {

    @Autowired
    private UsersRepository usersRepository;

    //get all data
    @GetMapping("/users")
    public List<Users> getAllUsers(){
        return usersRepository.findAll();
    }

    //create users
    @PostMapping("/users")
    public Users createUsers(@RequestBody Users users){
        return usersRepository.save(users);
    }

    //get users by id
    @GetMapping("/users/{id}")
    public ResponseEntity<Users> getUsersById(@PathVariable Long id){
        Users users = usersRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Users not exits with id :" + id));
        return ResponseEntity.ok(users);
    }
}
