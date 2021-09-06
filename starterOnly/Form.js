// class form

class Form {

    constructor() {
        this.firstname = document.getElementById('first').value;
        this.lastname = document.getElementById('last').value;
        this.email = document.getElementById('email').value;
        /*
        this.lastName = document.getElementById('last').value;
        this.email = document.getElementById('email').value;
        this.birthday = document.getElementById('birthdate').value;
        this.tournament = document.getElementById('quantity').value;
        // const city =
        */
        // this.errors = 0;

    }

    validate() {
        this.validateFirstname();
        this.validateLastName();
        this.validateEmail();
        /*
        if (this.errors == 0) {
            // valider formulaire
            // vidage du formulaire
            // cache la modale
            // affichage du message d'inscription ok
        }
        */
    }


    validateFirstname() {
        console.log(typeof this.firstname.length);

        const firstnameRegex = /^[a-zA-Z-]{2,20}$/i;
        if (!firstnameRegex.test(this.firstname)) {
            console.log('erreur first');
            // message d'erreur en dessous du bon champ
            // ajoutera 1 à une valeur défini dans le constructeur
            /*
            errorDisplay("first", "Le prénom doit faire entre 2 et 20 caractères");
            */
        } else {
            console.log('valide first');
            /*errorDisplay("first", "", true);*/

        }
    }

    validateLastName() {

        if (!this.lastname.match(this.regexp())) {
            console.log('erreur last');
            // message d'erreur en dessous du bon champ
            // ajoutera 1 à une valeur défini dans le constructeur
            /*
            errorDisplay("first", "Le prénom doit faire entre 2 et 20 caractères");
            */
        } else {
            console.log('valide last');
            /*errorDisplay("first", "", true);*/

        }
    }


    validateEmail() {

        if (!this.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            console.log('erreur email');
        } else {
            console.log('valid email');
        }

    }

    isValidateEmail(value) {
        if (!value.match((/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i))) {
            errorDisplay("email", "Le mail n'est pas valide");
            this.email = null;
        } else {
            errorDisplay("email", "", true);
            this.email = value;
        }
    }

    isValidateBirthday(value) {

    }

    isValidateTournament(value) {
        if (!value.match((/^[0-9]\d*$/))) {
            errorDisplay("quantity", "Vous devez saisir un chiffre complet");
            this.tournament = null;
        } else {
            errorDisplay("quantity", "", true);
            this.tournament = value;
        }
    }


}


