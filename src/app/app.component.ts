import { Component, ViewChild } from '@angular/core';
import { Filme } from './models/filme';
import {MatTabGroup} from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movies';
  public lista_filmes : Filme[] = [];
  public titulo : string | undefined;
  public ano_lancamento : number | undefined;
  public genero : string | undefined;
  public sinopse : string | undefined;
  public classificacao : string | undefined;
  public critica : string | undefined;
  public avaliacao : string | undefined;
  public edicao : boolean = false;
  public indice : number = -1;
  

  constructor() {
    let filme = new Filme("Sing", 2016, "Animação", 
    "Animais fazem uma audição para para participar de um concurso de talentos e salvar a empresa do coala.", "L", "O filme é ótimo!", "Muito Bom");
    this.lista_filmes.push(filme);
  }

  public salvar() {
    if(!this.titulo) {
      alert("Título é obrigatório!");
      return;
    }
    if(!this.ano_lancamento) {
      alert("Ano de Lançamento é obrigatório!");
      return;
    }
    if(!this.genero) {
      alert("Gênero é um campo obrigatório!");
      return;
    }
    if(!this.sinopse) {
      alert("Sinopse é um campo obrigatório!");
      return;
    }
    if(!this.classificacao) {
      alert("Classificação é um campo obrigatório!");
      return;
    }

    if(!this.critica) {
      alert("Crítica é um campo obrigatório!");
      return;
    }
    if(!this.avaliacao) {
      alert("Avaliação é um campo obrigatório!");
      return;
    }

    if(this.indice == -1) {
      let filme = new Filme(this.titulo, this.ano_lancamento, this.genero, this.sinopse, this.classificacao, this.critica, this.avaliacao);
      this.lista_filmes.push(filme);
      alert("Filme cadastrado com sucesso!");
    }
    else {
      this.lista_filmes[this.indice].setTitulo(this.titulo);
      this.lista_filmes[this.indice].setAnoLancamento(this.ano_lancamento);
      this.lista_filmes[this.indice].setGenero(this.genero);
      this.lista_filmes[this.indice].setSinopse(this.sinopse);
      this.lista_filmes[this.indice].setClassificacao(this.classificacao);
      this.lista_filmes[this.indice].setCritica(this.critica);
      this.lista_filmes[this.indice].setAvaliacao(this.avaliacao);
      alert("Informações sobre o filme alteradas com sucesso!");
      this.edicao = false;
      this.indice = -1;
    }
    
    this.titulo = undefined;
    this.ano_lancamento = undefined;
    this.genero = undefined;
    this.sinopse = undefined;
    this.classificacao = undefined;
    this.critica = undefined;
    this.avaliacao = undefined;
  }

  public excluir(index : number) {
    //console.log(index);
    var dialog = confirm("Você quer mesmo excluir esse filme?"); 
    if(dialog == true) {

      this.lista_filmes.splice(index, 1);
      alert("Filme excluído com sucesso!")

    } else {
      alert("Operação cancelada com sucesso!"); 
    }
    
  }

  public editar(index : number) {
    this.mudarTab(); 
    this.edicao = true;
    this.indice = index;
    this.titulo = this.lista_filmes[index].getTitulo();
    this.ano_lancamento = this.lista_filmes[index].getAnoLancamento();
    this.genero = this.lista_filmes[index].getGenero();
    this.sinopse = this.lista_filmes[index].getSinopse();
    this.classificacao = this.lista_filmes[index].getClassificacao();
    this.critica = this.lista_filmes[index].getCritica();
    this.avaliacao = this.lista_filmes[index].getAvaliacao();
  }

  /*Solução para que, quando for selecionado o botão "Editar" em um filme, seja trocado para a tab Operações
  de forma automática */

  /*O operador ! faz com que o Angular sete por si um valor para 'adaptarTab', necessário pois
  o atributo strict (tsconfig.json) tem o valor "true" - as variáveis precisam
  ser devidamente declaradas para não gerar erro
  */
  @ViewChild("adaptarTab") adaptarTab! : MatTabGroup; 
  public mudarTab() {
    const tabGroup = this.adaptarTab; 
    tabGroup.selectedIndex = 0; 
  }

  /*
  @ViewChild("confirmarExc") confirmarExc! : MatDialog; 
  public confirmarExclusao() {
    const dialog = new Dialogo(this.confirmarExc);

    dialog.openDialog(); 
    
  }*/

}
