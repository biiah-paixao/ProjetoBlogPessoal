package org.generation.blogPessoal.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_tema")
public class Tema {
	
	@Id // identifica que é uma chave primária 
	@GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
	private long id;
	
	@NotNull (message = "O atributo texto é obrigatório!")//valor não nulo
	private String descricao;
	
	@OneToMany(mappedBy = "tema", cascade = CascadeType.ALL)//cascade = forma de como será feito essa relação, All significa alterar alguma coisa referente a esse tema, todas as postagem sofrerão alterações
	@JsonIgnoreProperties("tema") // evitar um loop infinito / vai rodar apenas uma vez a informação
	private List<Postagem> postagem;
	//mappedBy é o references no MySQL em qual postagem voce estar se relacionando
	

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public List<Postagem> getPostagem() {
		return postagem;
	}

	public void setPostagem(List<Postagem> postagem) {
		this.postagem = postagem;
	}
	
	
	

}
