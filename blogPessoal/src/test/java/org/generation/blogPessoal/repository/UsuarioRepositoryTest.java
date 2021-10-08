package org.generation.blogPessoal.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;

import org.generation.blogPessoal.model.Usuario;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class UsuarioRepositoryTest {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@BeforeAll
	void start() {
		
		Usuario usuario = new Usuario(0, "Beatriz Paixão Souza Peron", "biiah@email.com.br", "13465278");
		if(!usuarioRepository.findByUsuario(usuario.getUsuario()).isPresent())
			usuarioRepository.save(usuario);
	
		usuario = new Usuario(0, "Evandir Paixão Souza Peron", "vandp@email.com.br", "13465278");
		if(!usuarioRepository.findByUsuario(usuario.getUsuario()).isPresent())
			usuarioRepository.save(usuario);
		
		usuario = new Usuario(0, "Alexandre Souza Peron", "alex@email.com.br", "13465278");
		if(!usuarioRepository.findByUsuario(usuario.getUsuario()).isPresent())
			usuarioRepository.save(usuario);

        usuario = new Usuario(0, "Claudio Belo Souza Peron", "belo@email.com.br", "13465278");
        if(!usuarioRepository.findByUsuario(usuario.getUsuario()).isPresent())
            usuarioRepository.save(usuario);
	}
	
	// Testa o método findByNome()
		@Test
		@DisplayName("💾 Retorna o nome")
		public void findByNomeRetornaNome() throws Exception {

			Usuario usuario = usuarioRepository.findByNome("Beatriz Paixão Souza Peron");
			assertTrue(usuario.getNome().equals("Beatriz Paixão Souza Peron"));
		}
		
	    // Testa o método findAllByNomeContainingIgnoreCase()
		@Test
		@DisplayName("💾 Retorna 2 usuarios")
		public void findAllByNomeContainingIgnoreCaseRetornaDoisUsuarios() {

			List<Usuario> listaDeUsuarios = usuarioRepository.findAllByNomeContainingIgnoreCase("Paixão");
			assertEquals(2, listaDeUsuarios.size());
		}

		@AfterAll
		public void end() {
			
			usuarioRepository.deleteAll();
			
		}

}
