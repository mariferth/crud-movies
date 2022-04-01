import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CriarFilmeComponent } from './components/criar-filme/criar-filme.component';
import { EditarFilmeComponent } from './components/editar-filme/editar-filme.component';
import { ListaDeFilmesComponent } from './components/lista-de-filmes/lista-de-filmes.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioGuard } from './services/usuario.guard';

const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'cadastro', component : CadastroComponent},
  {path:'listaDeFilmes', component: ListaDeFilmesComponent, canActivate : [UsuarioGuard]},
  {path:'criarFilme', component:CriarFilmeComponent, canActivate : [UsuarioGuard]},
  {path:'editarFilme/:indice', component:EditarFilmeComponent, canActivate : [UsuarioGuard]},
  {path:'**', redirectTo:"/login"},
  {path:'', redirectTo:"/login", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }