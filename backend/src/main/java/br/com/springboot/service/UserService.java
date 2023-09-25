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

    private BCryptPasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    public List<User> listarTodos() {
        return userRepository.findAll();
    }

    public User cadastro(User user){
        
        User exitsUser = userRepository.findByUsername(user.getUsername());
        
        if(exitsUser!=null){
            throw new Error("Usuário já existe")
        }

        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        return userRepository.save(user);
    }

    public User autenticar(String username, String senha){
        User user = userRepository.findByUsername(username);

        if (user != null && passwordEncoder.matches(senha, user.getPassword())) {
            return user; // Autenticação bem-sucedida
        }

        return null; // Falha na autenticação
    }
    }

