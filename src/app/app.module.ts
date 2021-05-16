import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'listado',
    component: ListadoComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    HomeComponent,
    CuerpoComponent,
    ContactoComponent,
    ListadoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
