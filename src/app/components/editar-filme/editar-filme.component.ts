import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Filme } from 'src/app/models/filme';
import { FilmeFirebaseService } from 'src/app/services/filme-firebase.service';


@Component({
  selector: 'app-editar-filme',
  templateUrl: './editar-filme.component.html',
  styleUrls: ['./editar-filme.component.scss']
})
export class EditarFilmeComponent implements OnInit {
  public formEditar : FormGroup;
  private id ? : any;

  constructor(private _router : Router, 
    private _actRoute : ActivatedRoute,
    private _filmeService : FilmeFirebaseService,
    private _formBuilder : FormBuilder) {
      this.formEditar = this._formBuilder.group({
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
    this._actRoute.params.subscribe((parametros) => {
      //console.log(parametros["indice"]);
      if (parametros["indice"]) {
        this.id = parametros["indice"];
        this._filmeService.getFilme(parametros["indice"])
        .subscribe(res => {
          let filmesRef : any = res;
          this.formEditar = this._formBuilder.group({
            titulo : [filmesRef.titulo, [Validators.required, Validators.minLength(3)]],
            ano_lancamento : [filmesRef.ano_lancamento, [Validators.required]],
            genero: [filmesRef.genero, [Validators.required]],
            sinopse: [filmesRef.sinopse, [Validators.required, Validators.minLength(5)]],
            classificacao: [filmesRef.classificacao, [Validators.required]],
            critica: [filmesRef.critica, [Validators.required, Validators.minLength(5)]],
            avaliacao: [filmesRef.avaliacao, [Validators.required]]
          });
        })
      }
    });
  }

  private validarFormulario() {
    for (let campos in this.formEditar.controls) {
      this.formEditar.controls[campos].markAllAsTouched();
    }
  }

  public submitForm (){
    this.validarFormulario();
    if (!this.formEditar.valid) {
      return;
    }
    this.salvar();
  }

  public salvar() {
    this._filmeService.editarFilme(this.formEditar.value, this.id)
    .then(() => {alert("Filme alterado com sucesso!")
      this._router.navigate(["/listaDeFilmes"])
    })
    .catch((error) => {console.log(error)
      alert("Erro ao salvar filme!")
    })
  }
}