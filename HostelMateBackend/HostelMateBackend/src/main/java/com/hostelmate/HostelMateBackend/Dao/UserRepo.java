package com.hostelmate.HostelMateBackend.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hostelmate.HostelMateBackend.model.Users;
@Repository
public interface UserRepo extends JpaRepository<Users,Integer> {
	Users findByEmail(String name);


}
