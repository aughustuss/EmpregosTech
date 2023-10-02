package br.com.springboot.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
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

    private PasswordEncoder passwordEncoder;

    @GetMapping
    public List<User> listarTodos() {
        List<User> UserList = userRepository.findAll();
        return UserList;
    }

    @PostMapping("/cadastro")
    public void cadastro(@RequestBody User user){

        User exitsUser = userRepository.findByUsername(user.getUsername());

        if(exitsUser!=null){
            throw new Error("Usuário já existe");
        }

        String encodedSenha = passwordEncoder.encode(user.getSenha());
        user.setSenha(encodedSenha);
        userRepository.save(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody String email,String senha){
        User user = userRepository.findByUsername(email);
        if(user != null){
            if(passwordEncoder.matches(senha, user.getSenha())){
            return "Autenticação bem-sucedida.";
        }else {
            return "Senha incorreta. Tente novamente.";
        }
    }

        return "Usuário não encontrado.";
    }}