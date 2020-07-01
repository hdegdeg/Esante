import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { MaladesComponent } from './malades/malades.component';
import { LoginComponent } from './administrateur/login/login.component';
import { MedecinlogComponent } from './medecins/medecinlog/medecinlog.component';
import { MaladelogComponent } from './malades/maladelog/maladelog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdministrateurComponent,
    MedecinsComponent,
    MaladesComponent,
    LoginComponent,
    MedecinlogComponent,
    MaladelogComponent,

 
    
  
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
