package org.generation.blogPessoal.model;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT) // verifica se aporta padrão está ocupada e já configura uma porta livre a ser usada
public class UsuarioTest {
	
	public Usuario usuario;
	private Usuario usuarioErro = new Usuario();
	
	@Autowired
	private  ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
	//ValidatorFactory verifica todas as anotações @notnull @size
	
	Validator validator = factory.getValidator(); //gravar dentro de validator se houve algum erro
	
			
	@BeforeEach
	public void start() {
		        
		usuario = new Usuario(0L, "Beatriz Paixão", "biiah@email.com.br", "13465278");

	}
	
	@Test
	@DisplayName("✔ Valida Atributos Não Nulos")
	void testValidaAtributos() {

		Set<ConstraintViolation<Usuario>> violacao = validator.validate(usuario);
		
		System.out.println(violacao.toString());

		assertTrue(violacao.isEmpty());
	}
	
	@Test
	@DisplayName("✖ Não Valida Atributos Nulos")
	void  testNaoValidaAtributos() {

		Set<ConstraintViolation<Usuario>> violacao = validator.validate(usuarioErro);
		System.out.println(violacao.toString());

		assertFalse(violacao.isEmpty());
	}
}
