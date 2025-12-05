package com.quorum.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CuriosidadesRepository extends JpaRepository<Curiosidades, Long> {

}
