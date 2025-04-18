package com.hostelmate.HostelMateBackend.WebLayer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hostelmate.HostelMateBackend.Dao.paymentsRepo;
import com.hostelmate.HostelMateBackend.homePageService.*;
import com.hostelmate.HostelMateBackend.model.Hostellers;
import com.hostelmate.HostelMateBackend.model.PendingDuesPojo;
import com.hostelmate.HostelMateBackend.model.PendingDuesPojo;

@RestController
public class homepageController {
	 
	@Autowired
     addHosteller add;
    @Autowired
	 pendingDues pendingdues; 
     
	@PostMapping("/addhosteller")
	public ResponseEntity<?> addHosteller(@RequestBody Hostellers hosteller){
		
		String hostellerId=add.verifiAndAddHostellr(hosteller);
		    if(hostellerId.equals("Hostller Already exists")) {
		        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Hosteller Already exists");
		    }else
		    	return ResponseEntity.ok(hostellerId);
	}
	
	@GetMapping("/pendingdues")
	public List<Object[]> pendingHostellers(){
		
		return  pendingdues.getPendingDues();
	}
}
