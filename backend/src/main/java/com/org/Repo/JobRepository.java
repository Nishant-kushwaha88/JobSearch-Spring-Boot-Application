package com.org.Repo;
import org.springframework.data.jpa.repository.JpaRepository;

import com.org.entity.*;

import java.util.List;

public interface JobRepository extends JpaRepository<Job, Long> {
    List<Job> findByLocationContainingIgnoreCase(String location);
    List<Job> findByJobType(String jobType); 
 
}