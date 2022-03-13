import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filme } from 'src/app/models/filme';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-lista-de-filmes',
  templateUrl: './lista-de-filmes.component.html',
  styleUrls: ['./lista-de-filmes.component.scss']
})
export class ListaDeFilmesComponent implements OnInit {
  public lista_filmes : Filme[] = [];

  constructor(private _router : Router, 
    private filmeService : FilmesService) {
  }

  ngOnInit(): void {
    this.lista_filmes = this.filmeService.getFilmes();
  }

  public excluir(indice : number) {
    let resultado = confirm("Deseja excluir o filme " + this.filmeService.getFilme(indice).getTitulo() + "?");
    if(resultado) {
      if (this.filmeService.excluirFilme(indice)) {
        alert("Filme excluído com sucesso!")
      }
      else {
        alert("Erro ao excluir filme!")
      }
    }
  }

  public editar(indice : number) : void {
    this._router.navigate(["/editarFilme", indice]);
  }

  public irParaCriarFilme() {
    this._router.navigate(["/criarFilme"]);
  }
}
