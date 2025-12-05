package com.quorum.backend;

// Otro DTO, esta vez para la respuesta.
// Contiene el token que se enviará al frontend.
public class LoginResponse {
    private final String token;

    public LoginResponse(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }
}
