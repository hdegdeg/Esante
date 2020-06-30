

// SPDX-License-Identifier: MIT

pragma solidity >=0.4.21 <0.7.0;


contract Malade {

    struct block_Malade {
        uint256 idMalade;
        uint256 telephoneMalade;
        string nomMalade;
        string prenomMalade;
        string addressMalade;
        string mailMalade;
        string passwordMalade;
        address[] Personnes_on_accees;

    }



    mapping(uint256 => block_Malade) Malade_Struct;

    uint256[] public listMalade;
    uint256 public nombreMalade;


    function setNewMalade(
        string memory _nomMalade,
        string memory _prenomMalade,
        string memory _addressMalade,
        uint256 _telephoneMalade,
        string memory _mailMalade,
        string memory _passwordMalade
    ) public {

        nombreMalade = listMalade.length + 1;

        Malade_Struct[nombreMalade].idMalade = nombreMalade;

        Malade_Struct[nombreMalade].nomMalade = _nomMalade;
        Malade_Struct[nombreMalade].prenomMalade = _prenomMalade;
        Malade_Struct[nombreMalade].addressMalade = _addressMalade;
        Malade_Struct[nombreMalade].telephoneMalade = _telephoneMalade;
        Malade_Struct[nombreMalade].mailMalade = _mailMalade;
        Malade_Struct[nombreMalade].passwordMalade = _passwordMalade;
        Malade_Struct[nombreMalade].Personnes_on_accees.push(msg.sender);
        listMalade.push(nombreMalade);
    }



     function AddNewAcces(uint256 idPersonnel,address adFonctionnaire) public{

       Malade_Struct[idPersonnel].Personnes_on_accees.push(adFonctionnaire);
    }

    function getPersonneOnAcces(uint256 idPersonnel) public view returns (address[] memory){

       block_Malade storage tmp = Malade_Struct[idPersonnel];
        return tmp.Personnes_on_accees;
    }

    function getIdMaladeWhoPersonnelHaveAccess(address addressPersonnel) public view returns (uint256[] memory)
    {
        block_Malade memory tmp;
        uint256[] memory  idByAddress;
       for(uint256 i = 0 ; i < nombreMalade ; i++)
       {
           tmp = Malade_Struct[i];
           for(uint256 j = 0 ; j < tmp.Personnes_on_accees.length ; j++)
           {
           if(tmp.Personnes_on_accees[j] == addressPersonnel){
                 idByAddress[idByAddress.length+1] = tmp.idMalade;
           }
           }
       }

        return idByAddress;
    }


    function getNombreMalade() public view returns (uint256 ) {
        return nombreMalade;
    }

    function getAllid() public view returns (uint256[] memory) {
        return listMalade;
    }


    function getNomMalade(uint256 idPersonnel)
        public
        view
        returns (string memory)
    {
        block_Malade storage tmp = Malade_Struct[idPersonnel];
        return tmp.nomMalade;
    }

    function getPrenomMalade(uint256 idPersonnel)
        public
        view
        returns (string memory)
    {
        block_Malade storage tmp = Malade_Struct[idPersonnel];
        return tmp.prenomMalade;
    }


    function getTelephoneMalade(uint256 idPersonnel)
        public
        view
        returns (uint256)
    {
        block_Malade storage tmp = Malade_Struct[idPersonnel];
        return tmp.telephoneMalade;
    }

     function getAddressMalade(uint256 idPersonnel)
        public
        view
        returns (string memory)
    {
        block_Malade storage tmp = Malade_Struct[idPersonnel];
        return tmp.addressMalade;
    }


    function getMailMalade(uint256 idPersonnel)
        public
        view
        returns (string memory)
    {
        block_Malade storage tmp = Malade_Struct[idPersonnel];
        return tmp.mailMalade;
    }

     function getPasswordMalade(uint256 idPersonnel)
        public
        view
        returns (string memory)
    {
        block_Malade storage tmp = Malade_Struct[idPersonnel];
        return tmp.passwordMalade;
    }
}
