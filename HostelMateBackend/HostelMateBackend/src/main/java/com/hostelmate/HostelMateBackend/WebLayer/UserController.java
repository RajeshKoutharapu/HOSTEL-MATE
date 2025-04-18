package com.hostelmate.HostelMateBackend.WebLayer;

import java.util.HashMap;
import java.util.Map;

import javax.naming.AuthenticationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hostelmate.HostelMateBackend.Dao.UserRepo;
import com.hostelmate.HostelMateBackend.SecuriryConfig.JwtService;
import com.hostelmate.HostelMateBackend.SecuriryConfig.UserService;
import com.hostelmate.HostelMateBackend.model.Users;
import com.hostelmate.HostelMateBackend.model.useridpass;



@RestController
//@CrossOrigin(origins = "http://localhost:3000")
public class UserController 
{
	@Autowired
	UserRepo repo;
	@Autowired
	private UserService service;
	
	private BCryptPasswordEncoder encoder=new BCryptPasswordEncoder(12);

	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JwtService jwtService;
	
	@PostMapping("register")
	public ResponseEntity<?> register(@RequestBody Users user)
	{
	     try {
		user.setPassword(encoder.encode(user.getPassword()));
		System.out.println(user.getPassword());
		 service.saveTheUser(user);
		 return  ResponseEntity.ok("Success");
	     }
	     catch(Exception e) {
	   
	         return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error occurred while registering the user");
	     }
		
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody useridpass idPass) throws AuthenticationException {
	    try {
	        Authentication authentication = authenticationManager.authenticate(
	                new UsernamePasswordAuthenticationToken(idPass.getUserId(), idPass.getPassword()));

	        if (authentication.isAuthenticated()) {
	            String token = jwtService.generateToken(idPass.getUserId());
	            Map<String,String> map=new HashMap<>();
	            map.put("token",token);
	            map.put("HostelName",repo.findByEmail(idPass.getUserId()).getHostelName());
	            return ResponseEntity.ok(map); // ✅ return token in response body
	        } else {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed");
	        }

	    } catch (Exception e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
	    }
	}

	@GetMapping("/info")
	public String getInfo()
	{
		return "example resource ";
	}

}
