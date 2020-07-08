import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Web3 from 'web3';
import { ActivatedRoute } from '@angular/router';
import {ConnectionService} from '../../connection.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-medecinlog',
  templateUrl: './medecinlog.component.html',
  styleUrls: ['./medecinlog.component.css']
})
export class MedecinlogComponent implements OnInit {
  public _idFonctionnaire= "***";
  public _nomFonctionnaire= "***";
  public _prenomFonctionnaire= "***";
  public _addressFonctionnaire;
  public _roleFonctionnaire = "***";
  public _telephoneFonctionnaire= "***";
  public _mailFonctionnaire = "***";
  public _passwordFonctionnaire= "***";
  public _createurFonctionnaire= "***";
  private listid: any[] ;

  private web3: Web3;


  private smartContract: Web3.eth.Contract;
  private accounts: Web3.eth.Accounts[];
  readonly Addresscontract = '0xb5ef83b727c924f0cF0B84083Ec6578565EA2868';


  constructor(private router: Router, private readonly http: HttpClient,private connection:ConnectionService) {}


  ngOnInit() {

    this.smartContract = this.connection.ConnectionPersonnel();
  
    console.log("debut Appel");
    

    console.log("Fin Appel");

  }



  async testLogin(data) {
    console.log("11");
    this.listid =await this.smartContract.methods.getAllid().call();
    
    console.log("22");

    this.listid.forEach(function (val) {
      console.log("id");
      console.log(val);
    });
  
    var a =this.listid.indexOf(data.numEmploi);

    console.log("variable = "+a);
    if(this.listid.indexOf(data.numEmploi) != -1) {
      console.log(data.numEmploi);
    }

    console.log("33");

    this._nomFonctionnaire = await this.smartContract.methods.getNomFonctionnaire(data.numEmploi).call();
    this._prenomFonctionnaire = await this.smartContract.methods.getPrenomFonctionnaire(data.numEmploi).call();   
    this._addressFonctionnaire = await this.smartContract.methods.getAddressFonctionnaire(data.numEmploi).call();
    this._roleFonctionnaire = await this.smartContract.methods.getRoleFonctionnaire(data.numEmploi).call();
    this._createurFonctionnaire = await this.smartContract.methods.getCreateurFonnctionnaire(data.numEmploi).call();
    this._telephoneFonctionnaire = await this.smartContract.methods.getTelephoneFonctionnaire(data.numEmploi).call();
    this._mailFonctionnaire = await this.smartContract.methods.getMailFonctionnaire(data.numEmploi).call();
    this._passwordFonctionnaire = await this.smartContract.methods.getPasswordFonctionnaire(data.numEmploi).call();


    //let InfosAdmin: string[] = [this.idAdmin, this.nomAdmin, this.prenomAdmin, this.numeroTel, this.mailAdmin, this.password,];

    if ((this.listid.indexOf(data.numEmploi) !== -1) && data.password == this._passwordFonctionnaire) {
      this.router.navigate(['/pageMalade']);
 

    }
    else {
      console.log(this._passwordFonctionnaire);
      alert('Votre mot de passe ou Gmail est Incorrect');
    }


  }



}
