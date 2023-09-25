package br.com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.com.springboot.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    
}

