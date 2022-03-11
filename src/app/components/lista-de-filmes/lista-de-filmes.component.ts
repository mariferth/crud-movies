import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/models/filme';

@Component({
  selector: 'app-lista-de-filmes',
  templateUrl: './lista-de-filmes.component.html',
  styleUrls: ['./lista-de-filmes.component.scss']
})
export class ListaDeFilmesComponent implements OnInit {
  public lista_filmes : Filme[] = [];

  constructor() {
    let filme = new Filme("Sing", 2016, "Animação", 
    "Animais fazem uma audição para para participar de um concurso de talentos e salvar a empresa do coala.", "L", "O filme é ótimo!", "Muito Bom");
    this.lista_filmes.push(filme);
  }

  ngOnInit(): void {
  }

}
