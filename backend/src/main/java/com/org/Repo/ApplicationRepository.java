package com.org.Repo;
import org.springframework.data.jpa.repository.JpaRepository;

import com.org.entity.*;

import java.util.List;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
    List<Application> findByJobId(Long jobId);
    List<Application> findByUserId(Long id);
    List<Application> findByJobPostedByEmail(String email);
}