import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import * as Web3 from 'web3';
import { ActivatedRoute } from '@angular/router';

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
  private accounts: Web3.eth.Accounts[];
  readonly AddresscontractAdmin = '0xd49F6F7ff572A869601E3bb38e4f42e9140d1a4a';


  readonly AbiAdmin = [
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

  public ZZid;
  public ZZname;
  public ZZprenom;

  constructor(private router: ActivatedRoute) {



    this.web3 = new Web3(Web3.givenProvider);
    this.web3.currentProvider.publicConfigStore.on('update', async () => {
      this.accounts = await this.web3.eth.getAccounts();
    });

  }

  ngOnInit() {

    let id = parseInt(this.router.snapshot.paramMap.get('id'));
    this.ZZid = id;

    let nom = parseInt(this.router.snapshot.paramMap.get('nom'));
    this.ZZname = name;

    let prenom = parseInt(this.router.snapshot.paramMap.get('prenom'));
    this.ZZprenom = prenom;

    this.ContractAdmin = new this.web3.eth.Contract(
      this.AbiAdmin,
      '0xd49F6F7ff572A869601E3bb38e4f42e9140d1a4a',
      { from: '0xfB9174C69c502D538731DDDc7703609176b19eC5' }
    );
    this.initAdmin();
  }
  async initAdmin() {
    await this.ContractAdmin.methods.initAdministrateur("1234", "DEGDEG", "Hicham", 558805327, "hdegdeg24@gmail.com", "degdeg123").send();

    await this.ContractAdmin.methods.initAdministrateur("122", "guer", "abdelillah", 5588051327, "a@gmail.com", "123").send();

    /*this.idAdmin = await this.ContractAdmin.methods.getIdAdmin().call();
    this.nomAdmin = await this.ContractAdmin.methods.getNomAdmin().call();
    this.prenomAdmin = await this.ContractAdmin.methods.getPrenomAdmin().call();
    this.numeroTel = await this.ContractAdmin.methods.getTelephoneAdmin().call();
    this.mailAdmin = await this.ContractAdmin.methods.getMailAdmin().call();
    this.prenomAdmin = await this.ContractAdmin.methods.getPasswordMalade().call();
    */
  }


  testLogin(data) {

  }

}
