import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';
import * as Web3 from 'web3';

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.css']
})


export class AdministrateurComponent implements OnInit {
   public idAdmin = "***";
   public nomAdmin = "***";
   public prenomAdmin = "***";
   public numeroTel ;
   public  mailAdmin = "***";
   CurrentDate : string = new Date().toDateString();
   CurrentTime  = new Date();
   private web3: Web3;

   private ContractAdmin: Web3.eth.Contract;
   private accounts: Web3.eth.Accounts[];
   readonly AddresscontractAdmin= "0x909af3270D50adABAAA95820959f849B8B99F0e1";


   readonly AbiAdmin= [
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "listRole",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_idAdmin",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_nomAdmin",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_prenomAdmin",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_numeroTel",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_mailAdmin",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_password",
          "type": "string"
        }
      ],
      "name": "initAdministrateur",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "nv_role",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_permission",
          "type": "string"
        }
      ],
      "name": "addRole",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "_typerole",
          "type": "string"
        }
      ],
      "name": "getRoleByName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAllRole",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "newpassword",
          "type": "string"
        }
      ],
      "name": "changePassword",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

  constructor() { 
    this.web3 = new Web3(Web3.givenProvider);
    this.web3.currentProvider.publicConfigStore.on('update', async () => {
      this.accounts = await this.web3.eth.getAccounts();
    } );

  }

  ngOnInit() {

    this.ContractAdmin= new this.web3.eth.Contract(
      this.AbiAdmin,
      '0x6BD0E73B6D1600ECFbFb87456Af91f0Cc0a2c3f5',
      {from:'0x3f5Fb7772571913275d5D21A1D678C266Cd83b7E'}
      );
      this.initAdmin();
  }
  async initAdmin()
  {
    await this.ContractAdmin.methods.initAdministrateur("1234","DEGDEG","Hicham",558805327,"hdegdeg24@gmail.com","degdeg123").send();

    this.idAdmin = await this.ContractAdmin.methods.getIdAdmin().call();
    this.nomAdmin  = await this.ContractAdmin.methods.getNomAdmin().call();
    this.prenomAdmin = await this.ContractAdmin.methods.getPrenomAdmin().call();
    this.numeroTel = await this.ContractAdmin.methods.getTelephoneAdmin().call();
    this.mailAdmin = await this.ContractAdmin.methods.getMailAdmin().call();
    this.prenomAdmin = await this.ContractAdmin.methods.getPasswordMalade().call();
  }

  
  testLogin(data)
  {
    
  }

}
