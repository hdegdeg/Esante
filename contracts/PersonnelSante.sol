

// SPDX-License-Identifier: MIT

pragma solidity >=0.4.21 <0.7.0;


contract PersonnelSante {

    struct Fonctionnaire {
        uint256 idFonctionnaire;
        uint256 telephoneFonctionnaire;
        string roleFonctionnaire;
        string nomFonctionnaire;
        string prenomFonctionnaire;
        string addressFonctionnaire;
        string mailFonctionnaire;
        string passwordFonctionnaire;
        address createurFonctionnaire;
    }



    mapping(uint256 => Fonctionnaire) Fonctionnaire_Struct;

    uint256[] public listPersonnel;

    uint256 public nombrePersonnels;


    function setNewFonctionnaire(
        string memory _roleFonctionnaire,
        string memory _nomFonctionnaire,
        string memory _prenomFonctionnaire,
        string memory _addressFonctionnaire,
        string memory _mailFonctionnaire,
        string memory _passwordFonctionnaire,
        uint _telephoneFonctionnaire,
        address _createurFonctionnaire
    ) public {

        nombrePersonnels = listPersonnel.length + 1;

        Fonctionnaire_Struct[nombrePersonnels].idFonctionnaire = nombrePersonnels;
        Fonctionnaire_Struct[nombrePersonnels].roleFonctionnaire = _roleFonctionnaire;
        Fonctionnaire_Struct[nombrePersonnels].nomFonctionnaire = _nomFonctionnaire;
        Fonctionnaire_Struct[nombrePersonnels].prenomFonctionnaire = _prenomFonctionnaire;
        Fonctionnaire_Struct[nombrePersonnels].addressFonctionnaire = _addressFonctionnaire;
        Fonctionnaire_Struct[nombrePersonnels].telephoneFonctionnaire = _telephoneFonctionnaire;
        Fonctionnaire_Struct[nombrePersonnels].mailFonctionnaire = _mailFonctionnaire;
        Fonctionnaire_Struct[nombrePersonnels].passwordFonctionnaire = _passwordFonctionnaire;
        Fonctionnaire_Struct[nombrePersonnels].createurFonctionnaire = _createurFonctionnaire;
        listPersonnel.push(nombrePersonnels);
    }


    function getNombrePersonnels() public view returns (uint256 ) {
        return nombrePersonnels;
    }

    function getAllid() public view returns (uint256[] memory) {
        return listPersonnel;
    }


    function getRoleFonctionnaire(uint256  idPersonnel)
        public
        view
        returns (string memory)
    {
        Fonctionnaire storage tmp = Fonctionnaire_Struct[idPersonnel];
        return tmp.roleFonctionnaire;
    }


    function getNomFonctionnaire(uint256 idPersonnel)
        public
        view
        returns (string memory)
    {
        Fonctionnaire storage tmp = Fonctionnaire_Struct[idPersonnel];
        return tmp.nomFonctionnaire;
    }


    function getPrenomFonctionnaire(uint256 idPersonnel)
        public
        view
        returns (string memory)
    {
        Fonctionnaire storage tmp = Fonctionnaire_Struct[idPersonnel];
        return tmp.prenomFonctionnaire;
    }



    function getTelephoneFonctionnaire(uint256 idPersonnel)
        public
        view
        returns (uint256)
    {
        Fonctionnaire storage tmp = Fonctionnaire_Struct[idPersonnel];
        return tmp.telephoneFonctionnaire;
    }


    function getAddressFonctionnaire(uint256 idPersonnel)
        public
        view
        returns (string memory)
    {
        Fonctionnaire storage tmp = Fonctionnaire_Struct[idPersonnel];
        return tmp.addressFonctionnaire;
    }

    function getMailFonctionnaire(uint256 idPersonnel)
        public
        view
        returns (string memory)
    {
        Fonctionnaire storage tmp = Fonctionnaire_Struct[idPersonnel];
        return tmp.mailFonctionnaire;
    }

     function getPasswordFonctionnaire(uint256 idPersonnel)
        public
        view
        returns (string memory)
    {
        Fonctionnaire storage tmp = Fonctionnaire_Struct[idPersonnel];
        return tmp.passwordFonctionnaire;
    }

    function getCreateurFonctionnaire(uint256  idPersonnel) public view returns (address )
     {
        Fonctionnaire storage tmp = Fonctionnaire_Struct[idPersonnel];
        return tmp.createurFonctionnaire;
    }
}
