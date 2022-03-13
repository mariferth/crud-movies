import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Filme } from 'src/app/models/filme';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-criar-filme',
  templateUrl: './criar-filme.component.html',
  styleUrls: ['./criar-filme.component.scss']
})
export class CriarFilmeComponent implements OnInit {

  public formCadastrar : FormGroup;
  
  constructor(private _router : Router, 
    private filmeService : FilmesService, 
    private _formBuilder : FormBuilder) { 
      this.formCadastrar = this._formBuilder.group({
        titulo : ["", [Validators.required, Validators.minLength(3)]],
        ano_lancamento : ["", [Validators.required]],
        genero: ["", [Validators.required]],
        sinopse: ["", [Validators.required, Validators.minLength(5)]],
        classificacao: ["", [Validators.required]],
        critica: ["", [Validators.required, Validators.minLength(5)]],
        avaliacao: ["", [Validators.required]]
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
    if(this.filmeService.inserirFilme(new Filme(this.formCadastrar.controls["titulo"].value, this.formCadastrar.controls["ano_lancamento"].value, this.formCadastrar.controls["genero"].value, this.formCadastrar.controls["sinopse"].value, this.formCadastrar.controls["classificacao"].value, this.formCadastrar.controls["critica"].value, this.formCadastrar.controls["avaliacao"].value))) {
      alert("Filme salvo com sucesso!");
      this._router.navigate(["/listaDeFilmes"]);
    }
    else {
      alert("Erro ao salvar filme!");
    }
  }

}
