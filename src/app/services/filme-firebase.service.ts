import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Filme } from '../models/filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeFirebaseService {
  private _PATH : string = "filmes";

  constructor(private angularFire: AngularFirestore) { }

  getFilme (id : string) {
    return this.angularFire.collection(this._PATH).doc(id).valueChanges();
  }

  getFilmes(){
    return this.angularFire.collection(this._PATH).snapshotChanges();
  }

  criarFilme(filme : Filme) {
    return this.angularFire.collection(this._PATH).add(filme);
  }

  deletarFilme(filme : Filme) {
    return this.angularFire.collection(this._PATH).doc(filme.id).delete();
  }

  editarFilme(filme : Filme, id : string) {
    return this.angularFire.collection(this._PATH).doc(id).update({
      titulo : filme.titulo,
      ano_lancamento : filme.ano_lancamento,
      genero : filme.genero,
      sinopse : filme.sinopse,
      classificacao : filme.classificacao,
      critica : filme.critica,
      avaliacao : filme.avaliacao
    });
  }
}