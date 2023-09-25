package br.com.springboot.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.springboot.model.User;
import br.com.springboot.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private UserService userService;

    @PostMapping("/")
    public User cadastro(@RequestBody User user){
        return userService.cadastro(user);
    }
}