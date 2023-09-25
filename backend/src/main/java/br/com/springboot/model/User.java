package br.com.springboot.model;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {

    private Long id;
    private String username;
    private String senha;
    public Object getPassword() {
        return null;
    }

}