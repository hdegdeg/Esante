import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Web3 from 'web3';
import { HttpClient } from '@angular/common/http';
import {ConnectionService} from '../../connection.service';

@Component({
  selector: 'app-medecinecriture',
  templateUrl: './medecinecriture.component.html',
  styleUrls: ['./medecinecriture.component.css']
})
export class MedecinecritureComponent implements OnInit {

  CurrentDate: string = new Date().toDateString();
  CurrentTime = new Date();

  public _nomMalade = "***";
  public _prenomMalade = "***";
  public _addressMalade;
  public _sexeMalade = "***";
  public _telephoneMalade = "***";
  public _mailMalade = "***";
  public _passwordMalade = "***";

  private web3: Web3;

  public listview: any = [];

  public listeid: any[] ;

  private smartContract: Web3.eth.Contract;
  private accounts: Web3.eth.Accounts[];


  constructor(private router: Router, private readonly http: HttpClient,private connection:ConnectionService) {}


  ngOnInit() {


    this.smartContract = this.connection.ConnectionMalade() ;
    console.log("debut Appel");


    console.log("Fin Appel");
    this.LoadListeMalade() ;
  }

  async addMalade(data)
  { 
    await this.smartContract.methods.setNewMalade(data.nomM, data.prenomM, data.addressM, data.sexeM, data.telephoneM, data.emailM,data.passwordM,data.compte).send();
    console.log("add Success");
  }




  async LoadListeMalade() {

    console.log("11***");

    let nombre =  await this.smartContract.methods.getNombreMalade().call();

   
    this.listeid = await this.smartContract.methods.getAllid().call();

 
    for(var i=0;i<nombre;i++) {
    console.log(this.listeid[i]);

let CurrentEmail=  await  this.smartContract.methods.getMailById(this.listeid[i]).call();

    let data={
      "Id":i+1,
      "Nom" :  await  this.smartContract.methods.getNomMalade(CurrentEmail).call() ,
      "Prenom":  await this.smartContract.methods.getPrenomMalade(CurrentEmail).call(),
      "Tel":   await  this.smartContract.methods.getTelephoneMalade(CurrentEmail).call(),
      "Email": await  this.smartContract.methods.getMailMalade(CurrentEmail).call(),
      "address":  await this.smartContract.methods.getAddressMalade(CurrentEmail).call() 

    };

     this.listview.push(data);

  }


  

}
}
