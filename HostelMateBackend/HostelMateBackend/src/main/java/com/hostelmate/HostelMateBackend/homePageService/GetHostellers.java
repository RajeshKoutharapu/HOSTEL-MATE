package com.hostelmate.HostelMateBackend.homePageService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hostelmate.HostelMateBackend.Dao.HostellersRepu;
import com.hostelmate.HostelMateBackend.Dao.paymentsRepo;
import com.hostelmate.HostelMateBackend.model.Hostellers;

@Service
public class GetHostellers {
    @Autowired
	HostellersRepu hostellersRepu;
    @Autowired
    paymentsRepo paymentsRepo;
	
    public boolean validateHosteller(Integer id) {
                   try {
                	Hostellers data =hostellersRepu.findById(id).get(); 
                	System.out.println(data);
                	if(data!=null)
                		 return true;
                	   
                   }catch (Exception e) {
                	   return false;				
                        }
				return false;
               
    }
    public Object getHosteller(String ownerId,Integer HostellerId){
    	  return paymentsRepo.getHostellerInformation(ownerId, HostellerId);
    }
}
