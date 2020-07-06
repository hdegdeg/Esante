import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Web3 from 'web3';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-ajouter-malade',
  templateUrl: './ajouter-malade.component.html',
  styleUrls: ['./ajouter-malade.component.css']
})
export class AjouterMaladeComponent implements OnInit {


  public _nomMalade = "***";
  public _prenomMalade = "***";
  public _addressMalade;
  public _sexeMalade = "***";
  public _telephoneMalade = "***";
  public _mailMalade = "***";
  public _passwordMalade = "***";

  private web3: Web3;


  private smartContract: Web3.eth.Contract;
  private accounts: Web3.eth.Accounts[];
  readonly Addresscontract = '0xb0041A05F94a3d181f2cC533582D6812Ca6A343B';


  readonly AbiContract =  [
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "listMalade",
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
      "name": "nombreMalade",
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
          "internalType": "string",
          "name": "_nomMalade",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_prenomMalade",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_addressMalade",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_sexeMalade",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_telephoneMalade",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_mailMalade",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_passwordMalade",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_createur",
          "type": "address"
        }
      ],
      "name": "setNewMalade",
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
          "name": "_mailMalade",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "adFonctionnaire",
          "type": "address"
        }
      ],
      "name": "AddNewAcces",
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
          "name": "_mailMalade",
          "type": "string"
        }
      ],
      "name": "getPersonneOntAcces",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
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
          "internalType": "address",
          "name": "addressPersonnel",
          "type": "address"
        }
      ],
      "name": "getIdMaladeWhoPersonnelHaveAccess",
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
      "constant": true,
      "inputs": [],
      "name": "getNombreMalade",
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
          "internalType": "string",
          "name": "_mailMalade",
          "type": "string"
        }
      ],
      "name": "getNomMalade",
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
          "name": "_mailMalade",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "newNom",
          "type": "string"
        }
      ],
      "name": "setNomMalade",
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
          "internalType": "string",
          "name": "_mailMalade",
          "type": "string"
        }
      ],
      "name": "getPrenomMalade",
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
          "name": "_mailMalade",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "newPrenom",
          "type": "string"
        }
      ],
      "name": "setPrenomMalade",
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
          "internalType": "string",
          "name": "_mailMalade",
          "type": "string"
        }
      ],
      "name": "getTelephoneMalade",
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
          "internalType": "string",
          "name": "_mailMalade",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "newTel",
          "type": "uint256"
        }
      ],
      "name": "setTelephoneMalade",
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
          "internalType": "string",
          "name": "_mailMalade",
          "type": "string"
        }
      ],
      "name": "getAddressMalade",
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
          "name": "_mailMalade",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "newAddress",
          "type": "string"
        }
      ],
      "name": "setAddressMalade",
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
          "internalType": "string",
          "name": "_mailMalade",
          "type": "string"
        }
      ],
      "name": "getMailMalade",
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
          "name": "_mailMalade",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "newMail",
          "type": "string"
        }
      ],
      "name": "setMailMalade",
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
          "internalType": "string",
          "name": "_mailMalade",
          "type": "string"
        }
      ],
      "name": "getPasswordMalade",
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
          "name": "_mailMalade",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "newPassword",
          "type": "string"
        }
      ],
      "name": "setPasswordMalade",
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
      '0xb0041A05F94a3d181f2cC533582D6812Ca6A343B',
      { from:'0xb2e61Ed6a3f1ef5Bf19fBa5947551d3d3aA6a05C'}
    );
    console.log("debut Appel");


    console.log("Fin Appel");

  }

  async addMalade(data)
  { 
    await this.smartContract.methods.setNewMalade(data.nomM, data.prenomM, data.addressM, data.sexeM, data.telephoneM, data.emailM,data.passwordM,data.compte).send();
    console.log("add Success");
  }

}
