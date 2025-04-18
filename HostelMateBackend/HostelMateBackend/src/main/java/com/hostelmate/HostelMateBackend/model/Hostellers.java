package com.hostelmate.HostelMateBackend.model;

import jakarta.persistence.*;
import java.util.Date;


@Entity
@Table(name = "hostellers")
public class Hostellers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String firstName;
    private String lastName;
    private String fathersName;
    private String mobileNumber;
    private String fathersMobile;
    private String aadhaarNumber;
    private String nativePlace;
    private String profession;
    private String allottedRoom;
    private String mode;
    private Double advancePayment;
    private String hostelleruserid;
    
    //owermailid not in hosteller table we getting this from ui to join the table with the right iwner
     private String ownermail;

    @Temporal(TemporalType.DATE)
    @Column(name = "joiningdate", insertable = false, updatable = false)
    private Date joiningDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id") // FK column referencing Users.id
    private Users user;

    // Getters and Setters
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public Users getUser() { return user; }
    public void setUser(Users user) { this.user = user; }
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getFathersName() {
		return fathersName;
	}
	public void setFathersName(String fathersName) {
		this.fathersName = fathersName;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getFathersMobile() {
		return fathersMobile;
	}
	public void setFathersMobile(String fathersMobile) {
		this.fathersMobile = fathersMobile;
	}
	public String getAadhaarNumber() {
		return aadhaarNumber;
	}
	public void setAadhaarNumber(String aadhaarNumber) {
		this.aadhaarNumber = aadhaarNumber;
	}
	public String getNativePlace() {
		return nativePlace;
	}
	public void setNativePlace(String nativePlace) {
		this.nativePlace = nativePlace;
	}
	public String getProfession() {
		return profession;
	}
	public void setProfession(String profession) {
		this.profession = profession;
	}
	public String getAllottedRoom() {
		return allottedRoom;
	}
	public void setAllottedRoom(String allottedRoom) {
		this.allottedRoom = allottedRoom;
	}
	public String getMode() {
		return mode;
	}
	public void setMode(String mode) {
		this.mode = mode;
	}
	public Double getAdvancePayment() {
		return advancePayment;
	}
	public void setAdvancePayment(Double advancePayment) {
		this.advancePayment = advancePayment;
	}
	public Date getJoiningDate() {
		return joiningDate;
	}
	public void setJoiningDate(Date joiningDate) {
		this.joiningDate = joiningDate;
	}
	public String getHostelleruserid() {
		return hostelleruserid;
	}
	public void setHostelleruserid(String hostelleruserid) {
		this.hostelleruserid = hostelleruserid;
	}
	public String getOwnermail() {
		return ownermail;
	}
	public void setOwnermail(String ownermail) {
		this.ownermail = ownermail;
	}
	

    // other getters and setters...
    
}
