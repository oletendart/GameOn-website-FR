function editNav() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModal = document.querySelector('.close');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModal.addEventListener("click", closureModal);

// launch modal form close and open
function launchModal() {
    modalbg.style.display = "block";
}

function closureModal() {
    modalbg.style.display = "";
}

// launch modal form value
/*function errorForm() {
  formData.classList.add = "data-error";
}*/

document.getElementById('btn-form').addEventListener('click', (e) => {
    const myForm = new Form;
    myForm.validate();



});

