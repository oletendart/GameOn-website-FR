// class form

class Form {

    constructor() {
        this.firstname = document.getElementById('first').value;
        this.lastname = document.getElementById('last').value;
        this.email = document.getElementById('email').value;
        this.birthdate = false;
        this.tournament = document.getElementById('quantity');
        this.chexboxRequired = document.getElementById('checkbox1');
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
            // cache la modale
            /*closureModal();
            document.getElementById("myform").reset();
            // affichage du message d'inscription ok
            this.registrationMessage = prompt();*/


        }

    }

    error(id, isError, msg) {
        let parent = document.getElementById(id).parentNode;
        parent.setAttribute('data-error-visible', isError);
        parent.setAttribute('data-error', msg);
    }

    // registerMessage() {
    //
    // }


    validateFirstname() {

        const firstnameRegex = /((^[A-Za-zÀÁÂÃÄÇÈÉÊËÌÍÎÏÒÓÔÕÖàáâäçéèêëîïõôö]+)([\-]{1}[A-Za-zÀÁÂÃÄÇÈÉÊËÌÍÎÏÒÓÔÕÖàáâäçéèêëîïõôö]+){0,1})$/gm;

        if (this.firstname.length < 2 || this.firstname.length > 20) {
            this.errors++;

            this.error("first", true, "Veuillez entrer 2 caractères ou plus.");

        } else if (!firstnameRegex.test(this.firstname)) {
            this.errors++;

            this.error('first', true, "Veuillez saisir un prénom valide.")
        } else {
            this.error('first', false);
        }
    }

    validateLastName() {

        const lastnameRegex = /((^[A-Za-zÀÁÂÃÄÇÈÉÊËÌÍÎÏÒÓÔÕÖàáâäçéèêëîïõôö]+)([\s]{1}[A-Za-zÀÁÂÃÄÇÈÉÊËÌÍÎÏÒÓÔÕÖàáâäçéèêëîïõôö]+){0,1})$/gm;

        if (this.lastname.length < 2 || this.lastname.length > 20) {
            this.errors++;

            this.error('last', "Veuillez entrer 2 caractères ou plus.", true);
        } else if (!lastnameRegex.test(this.lastname)) {
            this.errors++;

            this.error('last', "Veuillez saisir un nom valide.", true);
        } else {
            this.error('last', '', false);

        }
    }


    validateEmail() {

        if (this.email.length < 2 || this.email.length > 20 ) {
            this.errors++;

            this.error('email', "Veuillez remplir le champ.", true);
        } else if (!this.email.match(/(^[a-z0-9]+[\-\.]*[a-z0-9]+[\@][a-z]+[\-\.]*[a-z0-9]+[\.]{1}[a-z]{2,})$/gm)) {
            this.errors++;

            this.error('email', "Veuillez saisir une adresse mail valide.", true);
        } else {
            this.error('email', "", false);
        }

    }

    refreshDate(e) {
        e.setHours(0);
        e.setMinutes(0)
        e.setSeconds(0);
        e.setMilliseconds(0);
    }

    refreshDateBirthday(e, d) {
        e.setFullYear(d[0]);
        e.setMonth(d[1] - 1);
        e.setDate(d[2]);
        e.setHours(0);
        e.setMinutes(0);
        e.setSeconds(0);
        e.setMilliseconds(0);
    }

    validateBirthday() {
        let sixteenDate = new Date();
        this.refreshDate(sixteenDate);
        // split
        let birthdayInput = document.getElementById('birthdate');
        if (birthdayInput.value) {
            let dateOfBirthday = new Date();
            let date = birthdayInput.value.split('-');
            this.refreshDateBirthday(dateOfBirthday, date);
            this.birthdate = dateOfBirthday;
        }

        sixteenDate.setFullYear(sixteenDate.getFullYear() - 16);

        if (!this.birthdate) {
            this.errors++;

            this.error('birthdate', "Veuillez remplir le champ.", true);
        } else if (sixteenDate < this.birthdate) {
            this.errors++;

            this.error('birthdate', "Vous devez avoir plus de 16 ans.", true);
        } else {
            this.error('birthdate', '', false);
        }
    }

    validateTournament() {
        if (!this.tournament.value) {
            this.errors++;

            this.error('quantity', "Veuillez remplir le champ.", true);
        } else if (isNaN(Number(this.tournament.value))) {
            this.errors++;

            this.error('quantity', "Veuillez saisir un chiffre.", true);
        } else {
            this.error('quantity', "", false);
        }
    }

    validateCity() {
        const radios = document.getElementsByName('location');

        for (let i = 0; i < radios.length; i++) {
            if (radios[i].type === 'radio' && radios[i].checked) {
                this.city = radios[i].value;

                this.error('location1', "", false);
            }
        }

        if (!this.city) {
            this.errors++;

            this.error('location1', "Veuillez choisir une ville", true);
        }
    }

    validateChexbox() {
        if (!this.chexboxRequired.checked) {
            this.errors++;

            this.error('checkbox1', "Vous devez vérifier que vous acceptez les termes et conditions.", true);
        } else {
            this.error('checkbox1', "", false);
        }
    }

    /*clearCache() {
        this.firstname = "";
        this.lastname = "";
        this.email = "";
        this.birthdate.value = "";
        this.tournament.value = "";
    }*/

}


