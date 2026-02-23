package com.org.Repo;
import org.springframework.data.jpa.repository.JpaRepository;

import com.org.entity.*;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}