import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { ListaDeFilmesComponent } from './components/lista-de-filmes/lista-de-filmes.component';
import { CriarFilmeComponent } from './components/criar-filme/criar-filme.component';
import { EditarFilmeComponent } from './components/editar-filme/editar-filme.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeFilmesComponent,
    CriarFilmeComponent,
    EditarFilmeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule, 
    BrowserAnimationsModule, 
    MatTabsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
