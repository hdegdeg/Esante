import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Web3 from 'web3';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-ajouter-personnel',
  templateUrl: './ajouter-personnel.component.html',
  styleUrls: ['./ajouter-personnel.component.css']
})
export class AjouterPersonnelComponent implements OnInit {

  
  public _idFonctionnaire= "***";
  public _nomFonctionnaire= "***";
  public _prenomFonctionnaire= "***";
  public _addressFonctionnaire;
  public _roleFonctionnaire = "***";
  public _telephoneFonctionnaire= "***";
  public _mailFonctionnaire = "***";
  public _passwordFonctionnaire= "***";
  public _createurFonctionnaire= "***";


  private web3: Web3;


  private smartContract: Web3.eth.Contract;
  private accounts: Web3.eth.Accounts[];
  readonly Addresscontract = '0xb5ef83b727c924f0cF0B84083Ec6578565EA2868';


  readonly AbiContract =[
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "listPersonnel",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "nombrePersonnels",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
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
          "internalType": "uint256",
          "name": "_idFonctionnaire",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_roleFonctionnaire",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_nomFonctionnaire",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_prenomFonctionnaire",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_addressFonctionnaire",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_mailFonctionnaire",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_passwordFonctionnaire",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_telephoneFonctionnaire",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_createurFonctionnaire",
          "type": "address"
        }
      ],
      "name": "setNewFonctionnaire",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getNombrePersonnels",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAllid",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "idPersonnel",
          "type": "uint256"
        }
      ],
      "name": "getRoleFonctionnaire",
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
          "internalType": "uint256",
          "name": "idPersonnel",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_roleFonctionnaire",
          "type": "string"
        }
      ],
      "name": "setRoleFonctionnaire",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "idPersonnel",
          "type": "uint256"
        }
      ],
      "name": "getNomFonctionnaire",
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
          "internalType": "uint256",
          "name": "idPersonnel",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_nomFonctionnaire",
          "type": "string"
        }
      ],
      "name": "setNomFonctionnaire",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "idPersonnel",
          "type": "uint256"
        }
      ],
      "name": "getPrenomFonctionnaire",
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
          "internalType": "uint256",
          "name": "idPersonnel",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_prenomFonctionnaire",
          "type": "string"
        }
      ],
      "name": "setPrenomFonctionnaire",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "idPersonnel",
          "type": "uint256"
        }
      ],
      "name": "getTelephoneFonctionnaire",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
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
          "internalType": "uint256",
          "name": "idPersonnel",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_telephoneFonctionnaire",
          "type": "uint256"
        }
      ],
      "name": "SetTelephoneFonctionnaire",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "idPersonnel",
          "type": "uint256"
        }
      ],
      "name": "getAddressFonctionnaire",
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
          "internalType": "uint256",
          "name": "idPersonnel",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_addressFonctionnaire",
          "type": "string"
        }
      ],
      "name": "setAddressFonctionnaire",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "idPersonnel",
          "type": "uint256"
        }
      ],
      "name": "getMailFonctionnaire",
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
          "internalType": "uint256",
          "name": "idPersonnel",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_mailFonctionnaire",
          "type": "string"
        }
      ],
      "name": "setMailFonctionnaire",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "idPersonnel",
          "type": "uint256"
        }
      ],
      "name": "getPasswordFonctionnaire",
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
          "internalType": "uint256",
          "name": "idPersonnel",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_passwordFonctionnaire",
          "type": "string"
        }
      ],
      "name": "setPasswordFonctionnaire",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "idPersonnel",
          "type": "uint256"
        }
      ],
      "name": "getCreateurFonnctionnaire",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];

  constructor(private router: Router, private readonly http: HttpClient) {
    this.web3 = new Web3(Web3.givenProvider);
    
    this.web3.currentProvider.publicConfigStore.on('update', async () => {
      this.accounts = await this.web3.eth.getAccounts();
    });

  }

  ngOnInit() {


    this.smartContract = new this.web3.eth.Contract(
      this.AbiContract,
      '0xb5ef83b727c924f0cF0B84083Ec6578565EA2868',
      { from:'0xb2e61Ed6a3f1ef5Bf19fBa5947551d3d3aA6a05C'}
    );
    console.log("debut Appel");


    console.log("Fin Appel");

  }

  async addMalade(data)
  { 
    await this.smartContract.methods.setNewFonctionnaire(data.idF,data.roleF,data.nomF, data.prenomF, data.addressF, data.emailF ,data.passwordF ,data.telF, data.compte).send();
    console.log("add Success");
  }

}
