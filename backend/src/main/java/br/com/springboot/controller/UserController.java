package br.com.springboot.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.springboot.model.User;
import br.com.springboot.repository.UserRepository;

@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> listarTodos() {
        List<User> UserList = userRepository.findAll();
        return UserList;
    }

    @PostMapping
    public void cadastro(User user){

        User exitsUser = userRepository.findByUsername(user.getNome());

        if(exitsUser!=null){
            throw new Error("Usuário já existe");
        }

        userRepository.save(user);
    }

    
}