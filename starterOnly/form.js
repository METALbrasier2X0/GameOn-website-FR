
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
  FirstNameValid(firstName.value);
  LastNameValid(lastName.value);
  ValeurConcours(quantity.value);
  emailChecked(email.value);
  Birthdayvalid(birthdate.value)
  RadioChecked();
  CGChecked(checkboxInput);
    console.log(birthdate.value);
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

function FirstNameValid(input){
  var validityState_object = input.validity;
  if (input !== null && input.length >= 2){
    // firstName.setCustomValidity("");
    firstName.className = "text-control";
    document.getElementById("errorname").className = "error";
    document.getElementById('errorname').innerHTML="";
  error = false;
  return this.error}
  else {
  // firstName.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du Prénom.");
  firstName.className = "input-error";
  document.getElementById("errorname").className = "error-show";
  document.getElementById('errorname').innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
  error = true;
  return this.error}
};

function LastNameValid(input){
  if (input !== null && input.length >= 2){
    lastName.className = "text-control";
    document.getElementById("errorlast").className = "error";
  document.getElementById('errorlast').innerHTML="";
  error = false;
  return this.error}
  else {
    lastName.className = "input-error";
    document.getElementById("errorlast").className = "error-show";
    document.getElementById('errorlast').innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
  error = true;
  return this.error}
};

function ValeurConcours(input){
  if (isNaN(input)){
    quantity.className = "input-error";
    document.getElementById("errornumber").className = "error-show";
    document.getElementById('errornumber').innerHTML="Veuillez entrer un chiffre.";
  error = true;
  return this.error}
  else {

    quantity.className = "text-control";
    document.getElementById("errornumber").className = "error";
  document.getElementById('errornumber').innerHTML="";
  error = false;
  return this.error}
};

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function emailChecked(input){
  if (validateEmail(input)){
  document.getElementById("errormail").className = "error";
  document.getElementById('errormail').innerHTML="";
  error = false;
  return this.error}
  else {
    document.getElementById("errormail").className = "error-show";
    document.getElementById('errormail').innerHTML="Veuillez entrer un mail valide.";
  error = true;
  return this.error}
};

function Birthdayvalid(input){
  if (input.length !== 0){
  document.getElementById("errordate").className = "error";
  document.getElementById('errordate').innerHTML="";
  error = false;
  return this.error}
  else {
    document.getElementById("errordate").className = "error-show";
    document.getElementById('errordate').innerHTML="Veuillez entrer votre date de naissance.";
  error = true;
  return this.error}
};

function RadioChecked(){
  for (var item of locationRadio) {
    console.log(item)
    if (item.checked == true){
      document.getElementById("errorradio").className = "error";
      document.getElementById('errorradio').innerHTML="";
      error = false;
      return this.error}
      else {
        document.getElementById("errorradio").className = "error-show";
        document.getElementById('errorradio').innerHTML="Vous devez choisir une option.";
      error = true;}
};
}

function CGChecked(input){
  if (input.checked == true){
  document.getElementById("errorcg").className = "error";
  document.getElementById('errorcg').innerHTML="";
  error = false;
  return this.error}
  else {
    document.getElementById("errorcg").className = "error-show";
    document.getElementById('errorcg').innerHTML="Vous devez vérifier que vous acceptez les termes et conditions.";
  error = true;
  return this.error}
};
