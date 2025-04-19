package com.hostelmate.HostelMateBackend.homePageService;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hostelmate.HostelMateBackend.Dao.HostellersRepu;
import com.hostelmate.HostelMateBackend.Dao.paymentsRepo;
import com.hostelmate.HostelMateBackend.model.HostellerPayment;
import com.hostelmate.HostelMateBackend.model.HostellerPayment.PaymentStatus;


@Service
public class vacateHostellers {

    @Autowired
    private paymentsRepo repo;

    @Autowired
    private HostellersRepu hostellersRepu;

    public String vacateHostellerId(Integer id) {
        try {
            Optional<HostellerPayment> optionalData = repo.findById(id);
            if (!optionalData.isPresent()) {
                return "Invalid ID";
            }

            HostellerPayment data = optionalData.get();

            if (data.getPaymentStatus() == PaymentStatus.PENDING) {
                return String.valueOf(data.getPendingAmount());
            } else {
                hostellersRepu.deleteById(id);
                return "deleted";
            }
        } catch (Exception e) {
            return "Invalid ID";
        }
    }
}
