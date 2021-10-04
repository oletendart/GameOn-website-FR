// class form

class Form {

    constructor() {
        this.firstname = document.getElementById('first').value;
        this.lastname = document.getElementById('last').value;
        this.email = document.getElementById('email').value;
        this.birthdate = false;
        this.tournament = document.getElementById('quantity');
        this.chexboxObligatoire = document.getElementById('checkbox1');
        this.city = false;
        this.errors = 0;

    }

    validate() {
        this.validateFirstname();
        this.validateLastName();
        this.validateEmail();
        this.validateBirthday();
        this.validateTournament();
        this.validateCity();
        this.validateChexbox();

        if (this.errors === 0) {
            // valider formulaire
            // vidage du formulaire
            this.clearCache();
            // cache la modale
            // affichage du message d'inscription ok
        }

    }


    validateFirstname() {

        const firstnameRegex = /((^[A-Za-zÀÁÂÃÄÇÈÉÊËÌÍÎÏÒÓÔÕÖàáâäçéèêëîïõôö]+)([\-]{1}[A-Za-zÀÁÂÃÄÇÈÉÊËÌÍÎÏÒÓÔÕÖàáâäçéèêëîïõôö]+){0,1})$/gm;

        if (this.firstname.length < 2 || this.firstname.length > 20) {
            console.log('erreur first longueur');
            this.errors += 1;
            // message d'erreur en dessous du bon champ
            // ajoutera 1 à une valeur défini dans le constructeur
            /*
            errorDisplay("first", "Le prénom doit faire entre 2 et 20 caractères");
            */
        } else if (!firstnameRegex.test(this.firstname)) {
            console.log('erreur first regex');
            this.errors += 1;
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

        const lastnameRegex = /((^[A-Za-zÀÁÂÃÄÇÈÉÊËÌÍÎÏÒÓÔÕÖàáâäçéèêëîïõôö]+)([\s]{1}[A-Za-zÀÁÂÃÄÇÈÉÊËÌÍÎÏÒÓÔÕÖàáâäçéèêëîïõôö]+){0,1})$/gm;

        if (this.lastname.length < 2 || this.lastname.length > 20) {
            console.log('erreur last longueur');
            this.errors += 1;
            // message d'erreur en dessous du bon champ
            // ajoutera 1 à une valeur défini dans le constructeur
            /*
            errorDisplay("first", "Le prénom doit faire entre 2 et 20 caractères");
            */
        } else if (!lastnameRegex.test(this.lastname)) {
            console.log('erreur last regex');
            this.errors += 1;
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

        if (!this.email.match(/(^[a-z0-9]+[\-\.]*[a-z0-9]+[\@][a-z]+[\-\.]*[a-z0-9]+[\.]{1}[a-z]{2,})$/gm)) {
            console.log('erreur email regex');
            this.errors += 1;
        } else {
            console.log('valid email');
        }

    }

    validateBirthday() {
        let sixteenDate = new Date();
        sixteenDate.setHours(0);
        sixteenDate.setMinutes(0);
        sixteenDate.setSeconds(0);
        sixteenDate.setMilliseconds(0);
        console.log(this.birthdate.value);
        // split
        let birthdayInput = document.getElementById('birthdate');
        if (birthdayInput.value) {
            let dateOfBirthday = new Date();
            let date = birthdayInput.value.split('-');
            console.log(date);
            dateOfBirthday.setFullYear(date[0]);
            dateOfBirthday.setMonth(date[1] - 1);
            dateOfBirthday.setDate(date[2]);
            dateOfBirthday.setHours(0);
            dateOfBirthday.setMinutes(0);
            dateOfBirthday.setSeconds(0);
            dateOfBirthday.setMilliseconds(0);
            this.birthdate = dateOfBirthday;
        }
        console.log("birthday" + this.birthdate);


        sixteenDate.setFullYear(sixteenDate.getFullYear() - 16);
        console.log("sixteendate" + sixteenDate);


        if (!this.birthdate) {
            console.log('Remplir champ anniversaire');
            this.errors += 1;
        } else if (sixteenDate < this.birthdate) {
            console.log('erreur birtdhay');
            this.errors += 1;
        } else {
            console.log('valide birthday')
        }
    }

    validateTournament() {
        if (!this.tournament.value) {
            console.log('Veuillez remplir le champ tournament');
            this.errors += 1;
        } else if (isNaN(Number(this.tournament.value))) {
            console.log('pas un chiffre');
            this.errors += 1;
        } else {
            console.log('valide tournament')
        }
    }

    validateCity() {
        const radios = document.getElementsByName('location');
        /*
        const isValid = Array.from(radios).some((radio) => {
            return radio.checked
        });

         */


        for (let i = 0; i < radios.length; i++) {
            if (radios[i].type === 'radio' && radios[i].checked) {
                this.city = radios[i].value;
                console.log('okai city');
            }
        }


        if (!this.city) {
            console.log('veuillez choisir une city');
            this.errors++;
        }
    }

    validateChexbox() {
        if (!this.chexboxObligatoire.checked) {
            console.log('erreur chexbox');
            this.errors += 1;
        } else {
            console.log('valide checkbox')
        }
    }

    clearCache() {
        this.firstname = "";
        this.lastname = "";
        this.email = "";
        this.birthdate.value = "";
        this.tournament.value = "";
    }

}


