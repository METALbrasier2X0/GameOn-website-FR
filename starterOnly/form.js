
// DOM Elements - modal
const modalForm = document.querySelector(".bground");
const modalvalid = document.querySelector(".valid-modal");
const modalvalidBtn = document.querySelector(".valid-modal-btn");
const submitvalidBtn = document.querySelector(".btn-submit");
const form = document.getElementById("form");
// DOM Elements - inputs
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locationRadio = document.querySelectorAll(".checkbox-input[type=radio]");
const checkboxInput = document.getElementById("checkbox1");

//prevent submit form
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

// close modal validation
function closeValidModal() {
  document.getElementById("valid").className = "MyClass";
};


//Valid Confirm

function validate() {
  FirstNameValid();
  LastNameValid();
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(email.value);
    console.log(birthdate.value);
    console.log(quantity.value);
    console.log(locationRadio.value);
    console.log(checkboxInput.value);
    if (error == false) {
      modalvalid.style.display = "block";
      modalbg.style.display = "none";
      document.getElementById("form").reset();
      return true

    }
    else {
      return false;
    }
};

//verifications functions

function FirstNameValid(){
  let input = firstName.value;
  if (input !== null && input.length >= 2){
  error = false;
  return this.error}
  else {
  alert("Veuillez entrer 2 caractères ou plus pour le champ du Prénom.");
  error = true;
  return this.error}
};

function LastNameValid(){
  let input = lastName.value;
  if (input !== null && input.length >= 2){
  error = false;
  return this.error}
  else {
  alert("Veuillez entrer 2 caractères ou plus pour le champ du Nom.");
  error = true;
  return this.error}
};
