package com.hostelmate.HostelMateBackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = "com.hostelmate.HostelMateBackend.Model")
@EnableJpaRepositories(basePackages = "com.hostelmate.HostelMateBackend.Dao")
public class HostelMateBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(HostelMateBackendApplication.class, args);
	}

}
