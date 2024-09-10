package com.backendVersion.passOP.repository;

import com.backendVersion.passOP.model.Password;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PasswordRepository extends JpaRepository<Password, Integer> {

}
