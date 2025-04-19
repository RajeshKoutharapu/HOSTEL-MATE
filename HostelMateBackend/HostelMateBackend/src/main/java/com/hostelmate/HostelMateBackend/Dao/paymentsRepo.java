package com.hostelmate.HostelMateBackend.Dao;

import com.hostelmate.HostelMateBackend.model.HostellerPayment;
import com.hostelmate.HostelMateBackend.model.PendingDuesPojo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.hostelmate.HostelMateBackend.model.HostellerPayment.PaymentStatus;

import java.util.List;

public interface paymentsRepo extends CrudRepository<HostellerPayment, Integer> {

	@Query("SELECT h.id, h.firstName, h.lastName, h.mobileNumber, h.allottedRoom, p.pendingAmount " +
		       "FROM Hostellers h " +
		       "JOIN HostellerPayment p ON h.id = p.hostellerId " +
		       "WHERE p.paymentStatus = :status")
		List<Object[]> getPendingDuesData(@Param("status") HostellerPayment.PaymentStatus status);

		@Query("SELECT h, p " +
			       "FROM Hostellers h " +
			       "JOIN HostellerPayment p ON h.id = p.hostellerId " +
			       "WHERE h.ownermail = :ownerId AND h.id = :hostellerId")
			Object getHostellerInformation(@Param("ownerId") String ownerId,
			                                           @Param("hostellerId") Integer hostellerId);

}
