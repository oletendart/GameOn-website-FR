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
const closeModal = document.querySelectorAll('.close-modal');

const modal = document.getElementById('register-modal');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModal.forEach((btn) => btn.addEventListener("click", closureModal));
console.log(closeModal);


// launch modal form close and open
function launchModal() {
    modalbg.style.display = "block";
}

function closureModal() {
    modalbg.style.display = "none";
    modal.style.display = "none";

}

// launch modal form value
/*function errorForm() {
  formData.classList.add = "data-error";
}*/

document.getElementById('btn-form').addEventListener('click', (e) => {
    const myForm = new Form;
    myForm.validate();



});

