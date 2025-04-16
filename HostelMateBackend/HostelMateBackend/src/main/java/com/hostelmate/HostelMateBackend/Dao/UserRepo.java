package com.hostelmate.HostelMateBackend.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<Users,Integer> {
	Users findByEmail(String name);


}
