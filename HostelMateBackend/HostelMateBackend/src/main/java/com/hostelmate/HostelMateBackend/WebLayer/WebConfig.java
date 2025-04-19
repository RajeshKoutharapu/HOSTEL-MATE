package com.hostelmate.HostelMateBackend.WebLayer;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
	
	@Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Allow all routes
            .allowedOrigins("http://localhost:3000") // Allow frontend to send requests
            .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH") // Allowed HTTP methods
            .allowedHeaders("*")
            .exposedHeaders("Authorization")
            .allowCredentials(true);// Allow all headers
    }

}
