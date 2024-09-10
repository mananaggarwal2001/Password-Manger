package com.backendVersion.passOP.controller;

import com.backendVersion.passOP.model.Password;
import com.backendVersion.passOP.service.PasswordService;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.codec.json.Jackson2JsonDecoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
// this line will help in preventing the cors error in the website.
@CrossOrigin(origins = "*")
public class PasswordController {
    private final PasswordService passwordService;

    public PasswordController(PasswordService passwordService) {
        this.passwordService = passwordService;
    }
    @DeleteMapping("/password")
    public ResponseEntity<List<Password>> deletePassword(@RequestBody String id){
        System.out.println("Password was deleted with this id:- " + id);
        passwordService.deletePassword(Integer.parseInt(id));
        List<Password> remainingPasswords = passwordService.getAllPasswords();
        return ResponseEntity.status(200).body(remainingPasswords);
    }
    @GetMapping("/getAllPasswords")
    public ResponseEntity<List<Password>> getAllPasswords() {
        List<Password> getAllPasswords= passwordService.getAllPasswords();
        return ResponseEntity.status(200).body(getAllPasswords);
    }

    // this is used for adding new password and then do the work.
    @PostMapping("/password")
    public ResponseEntity<String> getPassword(@RequestBody String password) throws JsonProcessingException {
        System.out.println(password);
        // Object mapper is used for reading the value from JSON to the class value and then do the further process and the result will come out.
        Password password1= new ObjectMapper().readValue(password, Password.class);
        passwordService.setPassword(password1);
        return ResponseEntity.status(200).contentType(MediaType.APPLICATION_JSON).body(password);
    }
}