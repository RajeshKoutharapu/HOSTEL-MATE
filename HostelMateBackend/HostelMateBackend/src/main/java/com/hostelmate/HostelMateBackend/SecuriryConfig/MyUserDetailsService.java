package com.hostelmate.HostelMateBackend.SecuriryConfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.hostelmate.HostelMateBackend.Dao.*;


@Service
public class MyUserDetailsService implements UserDetailsService
{
 
	
	//private static final UserDetails null = null;
	@Autowired
	private UserRepo repo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Users user=repo.findByEmail(username);
		
		if(user==null)
		{
			System.out.println("404 not found");
			throw new UsernameNotFoundException("404 user not found");
		}
		
		return new UserPrincipal(user);
	}
   
}
