package br.com.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.springboot.model.User;
import br.com.springboot.repository.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;



    public User cadastro(User user){
        
        User exitsUser = userRepository.findByUsername(user.getNome());
        
        if(exitsUser!=null){
            throw new Error("Usuário já existe");
        }

        return userRepository.save(user);
    }

    public User autenticar(String username, String senha){
        User user = userRepository.findByUsername(username);

        return null;
    }
    }

