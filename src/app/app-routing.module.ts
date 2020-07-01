import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  AdministrateurComponent} from './administrateur/administrateur.component';
import { MaladesComponent } from './malades/malades.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { LoginComponent } from './administrateur/login/login.component';
import { MedecinlogComponent } from './medecins/medecinlog/medecinlog.component';
import { MaladelogComponent } from './malades/maladelog/maladelog.component';

import {HomeComponent} from './home/home.component'

const routes: Routes = [
  {path:'loginAdmin', component:LoginComponent},
  {path:'loginMedecin', component:MedecinlogComponent},
  {path:'loginMalade', component:MaladelogComponent},

  {path:'pageAdmin/:id', component:AdministrateurComponent},
  {path:'pageMalade', component:MaladesComponent},
  {path:'pageMedecin', component:MedecinsComponent},
  {path:'', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }