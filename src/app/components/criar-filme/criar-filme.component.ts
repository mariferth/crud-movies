import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Filme } from 'src/app/models/filme';
import { FilmeFirebaseService } from 'src/app/services/filme-firebase.service';


@Component({
  selector: 'app-criar-filme',
  templateUrl: './criar-filme.component.html',
  styleUrls: ['./criar-filme.component.scss']
})
export class CriarFilmeComponent implements OnInit {

  public formCadastrar : FormGroup;
  
  constructor(private _router : Router, 
    private filmeService : FilmeFirebaseService, 
    private _formBuilder : FormBuilder) { 
      this.formCadastrar = this._formBuilder.group({
        titulo : ["", [Validators.required, Validators.minLength(3)]],
        ano_lancamento : ["", [Validators.required]],
        genero: ["", [Validators.required]],
        sinopse: ["", [Validators.required, Validators.minLength(5)]],
        classificacao: ["", [Validators.required]],
        critica: ["", [Validators.required, Validators.minLength(5)]],
        avaliacao: ["", [Validators.required]],
        imagemURL: ["", [Validators.required]]
      });
    }

  ngOnInit(): void {
  }

  private validarFormulario() {
    for (let campos in this.formCadastrar.controls) {
      this.formCadastrar.controls[campos].markAllAsTouched();
    }
  }

  public submitForm (){
    this.validarFormulario();
    if (!this.formCadastrar.valid) {
      return;
    }
    this.salvar();
  }

  public salvar() {
    const target = document.getElementById("file") as HTMLInputElement;
    const file : File = (target.files as FileList)[0];
    this.filmeService.uploadStorage(file, this.formCadastrar.value)
    .then(() => { alert("Filme salvo com sucesso!")
      this._router.navigate(["/listaDeFilmes"]);
    })
    .catch((error) => {console.log(error) 
      alert("Erro ao salvar filme!")
    }) 
  }
}
