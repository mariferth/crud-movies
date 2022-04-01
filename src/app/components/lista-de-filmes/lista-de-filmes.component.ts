import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filme } from 'src/app/models/filme';
import { FilmeFirebaseService } from 'src/app/services/filme-firebase.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-de-filmes',
  templateUrl: './lista-de-filmes.component.html',
  styleUrls: ['./lista-de-filmes.component.scss']
})
export class ListaDeFilmesComponent implements OnInit {
  public lista_filmes : Filme[] = [];

  constructor(private _router : Router, 
    private usuarioService : UsuarioService,
    private filmeService : FilmeFirebaseService) {
  }

  ngOnInit(): void {
    this.filmeService.getFilmes()
    .subscribe(res => {
      this.lista_filmes = res.map(e=>{
        return {
          id : e.payload.doc.id,
          ...e.payload.doc.data() as Filme
        } as Filme;
      })
    })
  }

  public excluir(filme : Filme) {
    let resultado = confirm("Deseja excluir o filme " + filme.titulo + "?");
    if(resultado) {
      this.filmeService.deletarFilme(filme)
      .then(() => { alert("Filme excluído com sucesso!")})
      .catch(() => { alert("Erro ao excluir filme!")})
    }
  }

  public editar(filme : Filme) : void {
    this._router.navigate(["/editarFilme", filme.id]);
  }

  public irParaCriarFilme() {
    this._router.navigate(["/criarFilme"]);
  }

  public logout() {
    let resultado = confirm("Deseja realmente sair?");
    if (resultado) {
      this.usuarioService.logout()
      .then(() => {
        this._router.navigate(["/login"]);
      })
      .catch(() => {
        alert("Erro ao sair da plataforma!");
      })
    } 
  }
}