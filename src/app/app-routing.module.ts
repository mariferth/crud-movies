import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarFilmeComponent } from './components/criar-filme/criar-filme.component';
import { EditarFilmeComponent } from './components/editar-filme/editar-filme.component';
import { ListaDeFilmesComponent } from './components/lista-de-filmes/lista-de-filmes.component';

const routes: Routes = [
  {path:'listaDeFilmes', component: ListaDeFilmesComponent},
  {path:'criarFilme', component:CriarFilmeComponent},
  {path:'editarFilme/:indice', component:EditarFilmeComponent},
  {path:'**', redirectTo:"/listaDeFilmes"},
  {path:'', redirectTo:"/listaDeFilmes", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
