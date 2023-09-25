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

    public List<User> listarTodos() {
        return userRepository.findAll();
    }

    public User inserir(User user){
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
}
