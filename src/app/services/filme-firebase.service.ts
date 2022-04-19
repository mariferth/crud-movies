import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { Filme } from '../models/filme';
import { map, finalize, throwIfEmpty } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeFirebaseService {
  private _PATH : string = "filmes";
  task? : AngularFireUploadTask;
  UploadedFileUrl? : Observable<string>;
  fileName? : string;

  constructor(private angularFire: AngularFirestore,
    private storage : AngularFireStorage) { }

  getFilme (id : string) {
    return this.angularFire.collection(this._PATH).doc(id).valueChanges();
  }

  getFilmes(){
    return this.angularFire.collection(this._PATH).snapshotChanges();
  }

  async uploadStorage(file : File, filme : Filme) {
    if(file.type.split('/')[0] != 'image') {
      console.log("Tipo não suportado!");
      return;
    }
    this.fileName = file.name;
    const path = `imagem/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(path);
    this.task = this.storage.upload(path, file);
    this.task.snapshotChanges().pipe(
      finalize(() =>{
        this.UploadedFileUrl = fileRef.getDownloadURL();
        this.UploadedFileUrl.subscribe((resp) => {
          filme.imagemURL = resp;
          this.criarFilme(filme);
        });
      })
    ).subscribe()
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
      avaliacao : filme.avaliacao,
      //imagemURL : filme.imagemURL
    });
  }
}