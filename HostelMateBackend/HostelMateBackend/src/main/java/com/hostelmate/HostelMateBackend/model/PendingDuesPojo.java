package com.hostelmate.HostelMateBackend.model;

public class PendingDuesPojo {
    private Integer id;
    private String firstName;
    private String lastName;
    private String mobileNumber;
    private Double pendingAmount;
    private String allottedRoom;

    public PendingDuesPojo(Integer id, String firstName, String lastName,
                           String mobileNumber, Double pendingAmount, String allottedRoom) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobileNumber = mobileNumber;
        this.pendingAmount = pendingAmount;
        this.allottedRoom = allottedRoom;
    }

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

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

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public Double getPendingAmount() {
		return pendingAmount;
	}

	public void setPendingAmount(Double pendingAmount) {
		this.pendingAmount = pendingAmount;
	}

	public String getAllottedRoom() {
		return allottedRoom;
	}

	public void setAllottedRoom(String allottedRoom) {
		this.allottedRoom = allottedRoom;
	}

    // Getters and Setters (or use Lombok @Data if available)
    
}
