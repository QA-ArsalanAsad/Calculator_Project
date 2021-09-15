package com.example.Calculator;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.Calculator.Controller.CalculatorController;

@SpringBootTest
public class CalculatorControllerTest {
	
	@Test
	public void testCalc() throws Exception {
		CalculatorController calcCont = new CalculatorController();
		assertThat(new CalculatorController().GetExpressionValue("1+3")).isEqualTo(new ResponseEntity<String>("4.0", HttpStatus.OK));
	}
}
