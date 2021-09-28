package org.generation.blogPessoal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.generation.blogPessoal.model.Postagem;
import org.generation.blogPessoal.repository.PostagemRepository;

@RestController //anotações para informar que essa classe é um controller
@RequestMapping("/postagens") //por qual URI que essa classe será acessada
@CrossOrigin(origins = "*", allowedHeaders = "*") // essa classe vai aceitar requisição de qualquer origem o * significa todos
public class PostagemController {
	
	//ingerar a classe de repository
	@Autowired // responsabilidade de instanciação dessa interface para o spring - ingessão de dependencia
	private PostagemRepository postagemRepository; // objeto da interface repository
	
	//primeiro metodo - find all
	@GetMapping
	public ResponseEntity<List<Postagem>> getAll() 
	{
		return ResponseEntity.ok(postagemRepository.findAll());
	} // findAll é igual a select * from tb_postagens
	
	
	
	@GetMapping("/{id}")
	public ResponseEntity<Postagem> getById(@PathVariable long id) { 
		return postagemRepository.findById(id)
			.map(resposta -> ResponseEntity.ok(resposta))
			.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/titulo/{titulo}") // especifica é uma variavel do titulo {nome do titulo}
	public ResponseEntity<List<Postagem>> getByTitulo(@PathVariable String titulo) {
		return ResponseEntity.ok(postagemRepository.findAllByTituloContainingIgnoreCase(titulo));
	}
	
	@PostMapping // é enviar dados e persistir (gravar) um dado no banco
	public ResponseEntity<Postagem> postPostagem(@RequestBody Postagem postagem) { //requestBody é para pegar o corpo todo da requisição
		return ResponseEntity.status(HttpStatus.CREATED).body(postagemRepository.save(postagem));
	}
	
	@PutMapping // ATUALIZAR um dado no banco
	public ResponseEntity<Postagem> putPostagem(@RequestBody Postagem postagem) {
		return ResponseEntity.status(HttpStatus.OK).body(postagemRepository.save(postagem));
	}
	
	@DeleteMapping("/{id}")
	public void deletePostagem(@PathVariable long id) { // void não tem retorno
		postagemRepository.deleteById(id);
	}
	
}
