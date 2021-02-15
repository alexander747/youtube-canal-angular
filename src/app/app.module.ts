import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//llamadas a la api
import { HttpClientModule } from "@angular/common/http";

//importante importar esto para angular material animaciones
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//------------------------------estos dos van juntos para el modal la importacion de material angular y el componente modal
//material angular modal
import {MatDialogModule} from '@angular/material/dialog';
//component modal
import { ModalComponent } from './components/home/modal.component';
// pipe del dom seguro que sale al hacer petiiones pocas seguras
import { UnsafePipe } from './pipes/unsafe.pipe';




@NgModule({
  entryComponents: [
    ModalComponent
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ModalComponent,
    UnsafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
