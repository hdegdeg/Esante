import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Web3 from 'web3';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public idAdmin = "***";
  public nomAdmin = "***";
  public prenomAdmin = "***";
  public numeroTel ;
  public  mailAdmin = "***";
  public  password = "***";
  private web3: Web3;


  private smartContract: Web3.eth.Contract;
  private accounts: Web3.eth.Accounts[];
  readonly Addresscontract= '0x392998cae55b43995312b97798c2A51b29882Dd5';


  readonly AbiContract= [
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

 constructor(private router: Router) { 
   this.web3 = new Web3(Web3.givenProvider);
   this.web3.currentProvider.publicConfigStore.on('update', async () => {
     this.accounts = await this.web3.eth.getAccounts();
   } );

 }

 ngOnInit() {

   this.smartContract= new this.web3.eth.Contract(
     this.AbiContract,
     this.Addresscontract,
     {from:'0x14eA962FE99Bb404255ed439Ce17F67Db72f7515'}
     );
     console.log("debut Appel");

    // this.initAdmin();

     console.log("Fin Appel");

 }

 async initAdmin()
 {
   console.log("debut init Admin");
   await this.smartContract.methods.initAdministrateur("1234","DEGDEG","Hicham",558805327,"hdegdeg24@gmail.com","degdeg123").send();

   this.idAdmin = await this.smartContract.methods.getIdAdmin().call();
   this.nomAdmin  = await this.smartContract.methods.getNomAdmin().call();
   this.prenomAdmin = await this.smartContract.methods.getPrenomAdmin().call();
   this.numeroTel = await this.smartContract.methods.getTelephoneAdmin().call();
   this.mailAdmin = await this.smartContract.methods.getMailAdmin().call();
   this.password = await this.smartContract.methods.getPasswordMalade().call();

   console.log("Fin init Admin");

 }

 
 async testLogin(data)
 {
  this.idAdmin = await this.smartContract.methods.getIdAdmin().call();
   this.nomAdmin  = await this.smartContract.methods.getNomAdmin().call();
   this.prenomAdmin = await this.smartContract.methods.getPrenomAdmin().call();
   this.numeroTel = await this.smartContract.methods.getTelephoneAdmin().call();
   this.mailAdmin = await this.smartContract.methods.getMailAdmin().call();
   this.password = await this.smartContract.methods.getPasswordMalade().call();


  let InfosAdmin: string[]= [this.idAdmin, this.nomAdmin ,this.prenomAdmin ,this.numeroTel ,this.mailAdmin ,this.password ,];
  
   if(data.email==this.mailAdmin && data.password==this.password)
   {
    this.router.navigate(['/pageAdmin',this.idAdmin]);
  }
   else{
    alert('Votre mot de passe ou Gmail est Incorrect');
   }


 }

}
