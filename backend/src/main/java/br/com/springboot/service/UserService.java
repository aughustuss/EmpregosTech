package br.com.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.springboot.model.User;
import br.com.springboot.repository.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder;

    public UserService() {
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public BCryptPasswordEncoder passwordEncoder() {
        return passwordEncoder;
    }

    public List<User> listarTodos() {
        return userRepository.findAll();
    }


    public User cadastro(User user){
        
        User exitsUser = userRepository.findByUsername(user.getNome());
        
        if(exitsUser!=null){
            throw new Error("Usuário já existe");
        }

        String password = user.getSenha();
        String encodedPassword = passwordEncoder.encode(password);
        user.setSenha(encodedPassword);
        return userRepository.save(user);
    }

    public User autenticar(String username, String senha){
        User user = userRepository.findByUsername(username);

        if (user != null && passwordEncoder.matches(senha, user.getSenha())) {
            return user;
        }

        return null;
    }
    }

