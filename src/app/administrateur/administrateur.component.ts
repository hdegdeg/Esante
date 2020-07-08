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
  CurrentDate: string = new Date().toDateString();
  CurrentTime = new Date();
  private web3: Web3;

  private ContractAdmin: Web3.eth.Contract;
 /* private accounts: Web3.eth.Accounts[];
  readonly AddresscontractAdmin = '0xd49F6F7ff572A869601E3bb38e4f42e9140d1a4a';
*/


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

    this.ContractAdmin = this.connection.ConnectionAdmin;
    this.initAdmin();
  }
  async initAdmin() {
    //await this.ContractAdmin.methods.initAdministrateur("1234", "DEGDEG", "Hicham", 558805327, "hdegdeg24@gmail.com", "degdeg123").send();

    //await this.ContractAdmin.methods.initAdministrateur("122", "guer", "abdelillah", 5588051327, "a@gmail.com", "123").send();


  }


  testLogin(data) {

  }

}
