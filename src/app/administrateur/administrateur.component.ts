import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import * as Web3 from 'web3';
import { ActivatedRoute } from '@angular/router';
import {ConnectionService} from '../connection.service';

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.css']
})


export class AdministrateurComponent implements OnInit {
  public idAdmin = "***";
  public nomAdmin = "***";
  public prenomAdmin = "***";
  public numeroTel;
  public mailAdmin = "***";

  public listeRole: any[] ;
  public listview: any = [];

  CurrentDate: string = new Date().toDateString();
  CurrentTime = new Date();
  private web3: Web3;

  private ContractAdmin: Web3.eth.Contract;
 


  public ZZid;
  public ZZname;
  public ZZprenom;

  constructor(private router: ActivatedRoute,private connection:ConnectionService) {}

  ngOnInit() {

    let id = parseInt(this.router.snapshot.paramMap.get('id'));
    this.ZZid = id;

    let nom = parseInt(this.router.snapshot.paramMap.get('nom'));
    this.ZZname = name;

    let prenom = parseInt(this.router.snapshot.paramMap.get('prenom'));
    this.ZZprenom = prenom;

    this.ContractAdmin = this.connection.ConnectionAdmin();

    this.LoadListeRole();
  }



  async LoadListeRole() {
    console.log("11***");


   
    this.listeRole = await this.ContractAdmin.methods.getAllRole().call();
    let nombreRole = this.listeRole.length;
 
    for(var i=0; i<nombreRole; i++) {

      let data={
        "Id":i+1,
        "Type" :  await  this.ContractAdmin.methods.getRoleType(this.listeRole[i]).call() ,
        "Permission":  await this.ContractAdmin.methods.getRolePermission(this.listeRole[i]).call(),
    
      };
  
       this.listview.push(data);
  }

}
  async addRole(data) {

    await this.ContractAdmin.methods.addRole(data.typeRole,data.permissionRole).send();
    this.LoadListeRole() ;
   
  }

}
