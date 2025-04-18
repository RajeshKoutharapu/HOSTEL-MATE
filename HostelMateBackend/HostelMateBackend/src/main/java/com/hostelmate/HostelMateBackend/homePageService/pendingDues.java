package com.hostelmate.HostelMateBackend.homePageService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.hostelmate.HostelMateBackend.Dao.paymentsRepo;
import com.hostelmate.HostelMateBackend.model.HostellerPayment;
import com.hostelmate.HostelMateBackend.model.HostellerPayment.PaymentStatus;
import com.hostelmate.HostelMateBackend.model.PendingDuesPojo;

@Component
public class pendingDues {
  
	@Autowired
	paymentsRepo repo;
	
	public List<Object[]> getPendingDues(){
		  return repo.getPendingDuesData(HostellerPayment.PaymentStatus.PENDING);

	}
}
