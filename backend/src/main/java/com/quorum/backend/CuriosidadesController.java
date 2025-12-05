package com.quorum.backend;

import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
//@RequestMapping("/api/curiosidades")
//@CrossOrigin(origins = "http://localhost:5173")
public class CuriosidadesController {

  private final CuriosidadesRepository repository;

  public CuriosidadesController(CuriosidadesRepository repository) {
    this.repository = repository;
  }

  @PostMapping("/auth/login")
  public LoginResponse login(@RequestBody LoginRequest request) {
    if ("admin".equals(request.getUsername()) && "1234".equals(request.getPassword())) {
      return new LoginResponse("token-secreto-123");
    } else {
      throw new RuntimeException("Credenciales malas");
    }
  }


  // 1. LEER (GET)
  @GetMapping("/api/curiosidades")
  public List<Curiosidades> obtenerTodas() {
    return (List<Curiosidades>) repository.findAll();
  }

  // 2. CREAR (POST)
  @PostMapping("/api/curiosidades")
  public Curiosidades crear(@RequestBody Curiosidades curiosidades) {
    return repository.save(curiosidades);
  }

  // 3. ELIMINAR (DELETE)
  @DeleteMapping("/api/curiosidades/{id}")
  public void borrar(@PathVariable Long id) {
    repository.deleteById(id);
  }

  // 4. ACTUALIZAR (PUT)
  @PutMapping("/api/curiosidades/{id}")
  public Curiosidades actualizar(@PathVariable Long id, @RequestBody Curiosidades nuevaInfo) {
    return repository.findById(id)
      .map(curiosidades -> {
        curiosidades.setTitulo(nuevaInfo.getTitulo());
        curiosidades.setDescripcion(nuevaInfo.getDescripcion());
        curiosidades.setImagenUrl(nuevaInfo.getImagenUrl());
        return repository.save(curiosidades);
      })
      .orElseGet(() -> {
        nuevaInfo.setId(id);
        return repository.save(nuevaInfo);
      });
  }
}
