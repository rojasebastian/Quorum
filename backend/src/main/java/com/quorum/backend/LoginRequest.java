package com.quorum.backend;

// Esta clase es un Objeto de Transferencia de Datos (DTO)
// Sirve para mapear el JSON que envía el frontend en el login.
public class LoginRequest {
    private String username;
    private String password;

    // Getters y Setters son necesarios para que Jackson (el conversor de JSON) funcione.
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
