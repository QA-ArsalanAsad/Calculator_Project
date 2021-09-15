package com.example.Calculator.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.fathzer.soft.javaluator.DoubleEvaluator;

@CrossOrigin
@Controller
public class CalculatorController {
	
	@PostMapping("/calculate")
	public ResponseEntity<String> GetExpressionValue(@RequestBody String expression) throws Exception {
		
		System.out.println(expression);
		try {
			Double result = new DoubleEvaluator().evaluate(expression);
			return new ResponseEntity<>(result.toString(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>("Math/Syntax error", HttpStatus.OK);	
		}

	}

}
