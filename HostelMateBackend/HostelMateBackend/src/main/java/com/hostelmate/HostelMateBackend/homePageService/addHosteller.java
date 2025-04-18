package com.hostelmate.HostelMateBackend.homePageService;

import java.math.BigDecimal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hostelmate.HostelMateBackend.Dao.HostellersRepu;
import com.hostelmate.HostelMateBackend.Dao.UserRepo;
import com.hostelmate.HostelMateBackend.Dao.paymentsRepo;
import com.hostelmate.HostelMateBackend.model.HostellerPayment;
import com.hostelmate.HostelMateBackend.model.HostellerPayment.PaymentStatus;
import com.hostelmate.HostelMateBackend.model.Hostellers;

@Service
public class addHosteller {

	@Autowired
	HostellersRepu repo;
	@Autowired
	UserRepo userRepo;
	@Autowired
	paymentsRepo paymentsRepo;
	
	public String verifiAndAddHostellr(Hostellers hostellers) {
		
		Hostellers aadharveriyforuserExistence=repo.findByAadhaarNumber(hostellers.getAadhaarNumber());
		 if(aadharveriyforuserExistence==null) {
                System.out.println("dljNDDDDDDDDDDDJDDDDDD");
		 hostellers.setUser(userRepo.findByEmail(hostellers.getOwnermail()));
		 System.out.println(hostellers.getOwnermail());
		  Hostellers data= repo.save(hostellers);
		  //method call for saving the hoster dat in payments table 
		    setPaymentsToHosteller(data);
		 return data.getHostelleruserid();
		 }else {
			 return "Hostller Already exists";
		 }
	}
	
	public void setPaymentsToHosteller(Hostellers hosteller) {
        HostellerPayment payment = new HostellerPayment();
        payment.setHosteller(hosteller); // @MapsId takes care of ID

        BigDecimal advance = BigDecimal.valueOf(hosteller.getAdvancePayment());
        BigDecimal baseAmount = BigDecimal.valueOf(4000.0);
        BigDecimal pending = advance.subtract(baseAmount);
        payment.setPendingAmount(pending);

        if (pending.compareTo(BigDecimal.ZERO) >= 0) {
            payment.setPaymentStatus(PaymentStatus.CLEARED);
        } else {
            payment.setPaymentStatus(PaymentStatus.PENDING);
        }

        paymentsRepo.save(payment);
    }
}
