package org.generation.blogPessoal.repository;

import java.util.List;

import org.generation.blogPessoal.model.Postagem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostagemRepository extends JpaRepository<Postagem, Long> {
	
	public List <Postagem> findAllByTituloContainingIgnoreCase (String titulo); //findAllBy - busca todos pelo      Titulo - nome do atributo da entidade      Containing  - like - trazer tudo que conter dentro dele     IgnoreCase - ignorar maiusculo e minusculo

} //find = select/ all = * from / by = were 
	// Containing = like "%titulo%"
	//findAllByTituloContainingIgnoreCase (String titulo);
	//traga tudo de que contem e ignore case (String titulo - tudo do titulo
	