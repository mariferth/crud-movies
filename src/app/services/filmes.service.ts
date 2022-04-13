import { Injectable } from '@angular/core';
import { Filme } from '../models/filme';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private filmes : Filme[] = [];

  constructor() {
    this.inserirFilme(new Filme("Sing", 2016, "Animação", 
    "Animais fazem uma audição para para participar de um concurso de talentos e salvar a empresa do coala.", "L", "O filme é ótimo!", "Muito Bom", "ekfefndn"));
  }

  public inserirFilme(filme : Filme) : boolean {
    this.filmes.push(filme);
    return true;
  } 

  public getFilmes() : Filme[] {
    return this.filmes;
  }

  public getFilme(indice : number) : Filme {
    return this.filmes[indice];
  }

  public editarFilme(indice : number, filme : Filme) : boolean {
    this.filmes[indice] = filme;
    return true;
  }

  public excluirFilme(indice : number) {
    this.filmes.splice(indice, 1);
    return true;
  }
}
