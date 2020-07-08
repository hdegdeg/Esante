import { Injectable } from '@angular/core';
import * as Web3 from 'web3';

//Mnemonic:      glory never sign video circle chunk immense lion harvest library matter super

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private ContractAdmin: Web3.eth.Contract;
  private ContractPersonnels: Web3.eth.Contract;
  private ContractMalade: Web3.eth.Contract;

  private web3: Web3;
  private accounts: Web3.eth.Accounts[];

  readonly AbiAdmin =  [
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
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "newNom",
          "type": "string"
        }
      ],
      "name": "changeNom",
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
          "name": "newPrenom",
          "type": "string"
        }
      ],
      "name": "changePrenom",
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
          "name": "newEmail",
          "type": "string"
        }
      ],
      "name": "changeEmail",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newTel",
          "type": "uint256"
        }
      ],
      "name": "changeTel",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getIdAdmin",
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
      "constant": true,
      "inputs": [],
      "name": "getNomAdmin",
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
      "constant": true,
      "inputs": [],
      "name": "getPrenomAdmin",
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
      "constant": true,
      "inputs": [],
      "name": "getTelephoneAdmin",
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
      "name": "getMailAdmin",
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
      "constant": true,
      "inputs": [],
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
    }
  ];
  readonly AbiPersonnels =  [
    {
      "constant": true,
      "inputs": [],
      "name": "currentIdFonctionnaire",
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
  ] ;
  readonly AbiMalade = [
    {
      "constant": true,
      "inputs": [],
      "name": "currentEmail",
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
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "idMalade",
          "type": "uint256"
        }
      ],
      "name": "getMailById",
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

  constructor() { 

    this.web3 = new Web3(Web3.givenProvider);
    this.web3.currentProvider.publicConfigStore.on('update', async () => {
      this.accounts = await this.web3.eth.getAccounts();
    });
  }

  ConnectionAdmin(){

    this.ContractAdmin = new this.web3.eth.Contract(
      this.AbiAdmin,
      '0x544146C549bF89f516333a47a10CC0Dc43D8A52b',
      { from: '0xb2e61Ed6a3f1ef5Bf19fBa5947551d3d3aA6a05C' }
    );

    return this.ContractAdmin;
  }

  ConnectionPersonnel(){

    this.ContractPersonnels = new this.web3.eth.Contract(
      this.AbiPersonnels,
      '0xb5ef83b727c924f0cF0B84083Ec6578565EA2868',
      { from: '0xb2e61Ed6a3f1ef5Bf19fBa5947551d3d3aA6a05C' }
    );

    return  this.ContractPersonnels ;
  }

  ConnectionMalade(){

    this.ContractMalade = new this.web3.eth.Contract(
      this.AbiMalade,
      '0xb0041A05F94a3d181f2cC533582D6812Ca6A343B',
      { from: '0xb2e61Ed6a3f1ef5Bf19fBa5947551d3d3aA6a05C' }
    );

    return this.ContractMalade;
  }


}
