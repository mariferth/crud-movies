import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Filme } from 'src/app/models/filme';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-editar-filme',
  templateUrl: './editar-filme.component.html',
  styleUrls: ['./editar-filme.component.scss']
})
export class EditarFilmeComponent implements OnInit {
  public formEditar : FormGroup;
  private indice : number = -1;

  constructor(private _router : Router, 
    private _actRoute : ActivatedRoute,
    private _filmeService : FilmesService,
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
      if (parametros["indice"]) {
        this.indice = parametros["indice"];
        let filme = this._filmeService.getFilme(this.indice);
        this.formEditar = this._formBuilder.group({
          titulo : [filme.getTitulo(), [Validators.required, Validators.minLength(3)]],
          ano_lancamento : [filme.getAnoLancamento(), [Validators.required]],
          genero: [filme.getGenero(), [Validators.required]],
          sinopse: [filme.getSinopse(), [Validators.required, Validators.minLength(5)]],
          classificacao: [filme.getClassificacao(), [Validators.required]],
          critica: [filme.getCritica(), [Validators.required, Validators.minLength(5)]],
          avaliacao: [filme.getAvaliacao(), [Validators.required]]
        });
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
    let filme = new Filme(this.formEditar.controls["titulo"].value, this.formEditar.controls["ano_lancamento"].value, this.formEditar.controls["genero"].value, this.formEditar.controls["sinopse"].value, this.formEditar.controls["classificacao"].value, this.formEditar.controls["critica"].value, this.formEditar.controls["avaliacao"].value);
    if(this._filmeService.editarFilme(this.indice, filme)){
      alert("Filme alterado com sucesso!");
      this._router.navigate(["/listaDeFilmes"]);
    }
    else {
      alert("Erro ao salvar filme!");
    }
  }

}
