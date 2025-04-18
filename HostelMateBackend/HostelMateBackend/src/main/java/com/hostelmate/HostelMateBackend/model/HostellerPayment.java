package com.hostelmate.HostelMateBackend.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
@Entity
@Table(name = "hosteller_payments")
public class HostellerPayment {

    @Id
    @Column(name = "hosteller_id", nullable = false)
    private Integer hostellerId;  // This will act as the primary key

    @Enumerated(EnumType.STRING)
    @Column(name = "payment_status", nullable = false)
    private PaymentStatus paymentStatus;

    @Column(name = "pending_amount", precision = 10, scale = 2)
    private BigDecimal pendingAmount;

    // Mapping the hosteller field, using @MapsId to link the ID with the hosteller entity
    @MapsId
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "hosteller_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Hostellers hosteller;

    // Getters and Setters
    public Integer getHostellerId() {
        return hostellerId;
    }

    public void setHostellerId(Integer hostellerId) {
        this.hostellerId = hostellerId;
    }

    public PaymentStatus getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(PaymentStatus paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public BigDecimal getPendingAmount() {
        return pendingAmount;
    }

    public void setPendingAmount(BigDecimal pendingAmount) {
        this.pendingAmount = pendingAmount;
    }

    public Hostellers getHosteller() {
        return hosteller;
    }

    public void setHosteller(Hostellers hosteller) {
        this.hosteller = hosteller;
    }

    public enum PaymentStatus {
        PENDING,
        CLEARED
    }
}
