package com.hostelmate.HostelMateBackend.SecuriryConfig;
import com.hostelmate.HostelMateBackend.Dao.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService 
{
	@Autowired
    private UserRepo repo;
	
	public Users saveTheUser(Users user)
	{
		return repo.save(user);
	}
}
