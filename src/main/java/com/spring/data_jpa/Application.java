package com.spring.data_jpa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.File;
import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.net.URLDecoder;
import java.security.CodeSource;

@SpringBootApplication
public class Application {

	public static void main(String[] args) throws UnsupportedEncodingException, URISyntaxException {

		SpringApplication.run(Application.class, args);
	}

}
