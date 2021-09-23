package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages={"com"})
public class BackEndFinalNativeApplication {

	public static void main(String[] args) {

		SpringApplication.run(BackEndFinalNativeApplication.class, args);
	}

}
