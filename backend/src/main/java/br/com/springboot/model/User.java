package br.com.springboot.model;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {

    private Long id;
    private String tipo;
    private String email;
    private String nome;
    private String senha;
    public Object getPassword() {
        return null;
    }

    public void setSenha(String senha) {
        this.senha = senha;
      }

    public String getSenha(String senha) {
        return senha;
    }

}