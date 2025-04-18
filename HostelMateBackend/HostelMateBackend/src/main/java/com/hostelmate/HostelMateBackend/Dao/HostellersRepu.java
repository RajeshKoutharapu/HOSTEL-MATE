package com.hostelmate.HostelMateBackend.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hostelmate.HostelMateBackend.model.Hostellers;

@Repository
public interface HostellersRepu extends JpaRepository<Hostellers,Integer> {
	 
	Hostellers findByAadhaarNumber(String aadhar);

}
