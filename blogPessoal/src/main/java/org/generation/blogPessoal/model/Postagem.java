package org.generation.blogPessoal.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity //Gera uma tabela
@Table(name = "tb_postagem") // Definir nome da tabela
public class Postagem {
	
	@Id // identifica que é uma chave primária 
	@GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
	private long id;
	
	@NotNull (message = "O atributo texto é obrigatório!")//valor não nulo
	@Size(min = 5, max = 100, message = "O atributo texto deve ter no minimo 5 caracters e no maximo 100 caracteres") // tamanho do atributo minimo e maximo
	private String titulo;
	
	@NotNull
	@Size(min = 10, max = 500, message = "O atributo texto deve ter no minimo 5 caracters e no maximo 100 caracteres") // tamanho do atributo minimo e maximo
	private String texto;
	
	@Temporal(TemporalType.TIMESTAMP) // parametro de tempo e o estilo será timestamp
	private Date data = new java.sql.Date(System.currentTimeMillis());
	
	@ManyToOne
	@JsonIgnoreProperties("postagem")
	private Tema tema;

	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getTexto() {
		return texto;
	}
	public void setTexto(String texto) {
		this.texto = texto;
	}
	public Date getData() {
		return data;
	}
	public void setData(Date data) {
		this.data = data;
	}

	public Tema getTema() {
		return tema;
	}

	public void setTema(Tema tema) {
		this.tema = tema;
	}
	
	
	

}
