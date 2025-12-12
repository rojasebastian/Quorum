package com.quorum.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import(SecurityConfig.class) // ¡Importamos explícitamente la configuración de seguridad!
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    // Volvemos a usar CommandLineRunner para inicializar los datos.
    // Ahora que la seguridad se cargará correctamente, esto debería funcionar.
    @Bean
    public CommandLineRunner initData(CuriosidadesRepository repository) {
        return (args) -> {
            repository.save(new Curiosidades(
                "El Sol es ruidoso",
                "Si el espacio tuviera aire, escucharíamos al Sol como un tren constante a 100dB.",
                "https://content.nationalgeographic.com.es/medio/2022/08/07/el-sol_e26b22b0_1200x720.jpg"
            ));
            repository.save(new Curiosidades(
                "Los pulpos tienen 3 corazones",
                "Dos bombean sangre a las branquias y uno al resto del cuerpo.",
                "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10"
            ));

            System.out.println("--- ✅ DATOS GUARDADOS: " + repository.count() + " CURIOSIDADES ---");
        };
    }
}
