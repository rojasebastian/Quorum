package com.quorum.backend;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Curiosidades {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String titulo;
  private String descripcion;
  private String imagenUrl;

  // 1. Constructor vacío (Obligatorio para Spring)
  public Curiosidades() {
  }

  // 2. Constructor con datos (Para facilitar la creación)
  public Curiosidades(String titulo, String descripcion, String imagenUrl) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagenUrl = imagenUrl;
  }

  // 3. Getters y Setters (Para leer y escribir datos)
  public Long getId() { return id; }
  public void setId(Long id) { this.id = id; }

  public String getTitulo() { return titulo; }
  public void setTitulo(String titulo) { this.titulo = titulo; }

  public String getDescripcion() { return descripcion; }
  public void setDescripcion(String descripcion) { this.descripcion = descripcion; }

  public String getImagenUrl() { return imagenUrl; }
  public void setImagenUrl(String imagenUrl) { this.imagenUrl = imagenUrl; }
}
