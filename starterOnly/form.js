
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
  document.getElementById("valid-content").style.display = "none";
  document.getElementById("valid").style.display = "none";
};

//Valid Confirm

function validate() {
  var errors =  [];
  FirstNameValid(firstName.value, errors);
  LastNameValid(lastName.value, errors);
  emailChecked(email.value, errors);
  Birthdayvalid(birthdate.value, errors)
  ValeurConcours(quantity.value, errors);
  RadioChecked(errors);
  CGChecked(checkboxInput, errors);
  console.log(errors);
  final_value = errors.every(bool => bool);


    if (final_value == true) {
    document.getElementById("valid").style.display = "block";
    document.getElementById("valid-content").style.display = "block";
    modalbg.style.display = "none";
    document.getElementById("form").reset();
    return true;
    }
    else {
      return false
    } ;
}

//verifications functions

function FirstNameValid(input, errors){
  var validityState_object = input.validity;
  if (input !== null && input.length >= 2){
    firstName.className = "text-control";
    document.getElementById("errorname").className = "error";
    document.getElementById('errorname').innerHTML="";
  errors.push(true);
  return this.errors}
  else {
  firstName.className = "input-error";
  document.getElementById("errorname").className = "error-show";
  document.getElementById('errorname').innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
  errors.push(false);
  return this.errors}
};

function LastNameValid(input, errors){
  if (input !== null && input.length >= 2){
    lastName.className = "text-control";
    document.getElementById("errorlast").className = "error";
  document.getElementById('errorlast').innerHTML="";
  errors.push(true);
  return this.errors}
  else {
    lastName.className = "input-error";
    document.getElementById("errorlast").className = "error-show";
    document.getElementById('errorlast').innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
  errors.push(false);
  return this.errors}
};

function ValeurConcours(input, errors){
  if (isNaN(input)){
    quantity.className = "input-error";
    document.getElementById("errornumber").className = "error-show";
    document.getElementById('errornumber').innerHTML="Veuillez entrer un chiffre.";
  errors.push(false);
  return this.errors}
  else if (input.length == 0){
    quantity.className = "input-error";
    document.getElementById("errornumber").className = "error-show";
    document.getElementById('errornumber').innerHTML="Veuillez entrer un chiffre.";
  errors.push(false);
  return this.errors}
  else {
    quantity.className = "text-control";
    document.getElementById("errornumber").className = "error";
  document.getElementById('errornumber').innerHTML="";
  errors.push(true);
  return this.errors}
};

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function emailChecked(input, errors){
  if (validateEmail(input)){
  email.className = "text-control";
  document.getElementById("errormail").className = "error";
  document.getElementById('errormail').innerHTML="";
  errors.push(true);
  return this.errors}
  else {
    email.className = "input-error";
    document.getElementById("errormail").className = "error-show";
    document.getElementById('errormail').innerHTML="Veuillez entrer un mail valide.";
  errors.push(false);
  return this.errors}
};

function Birthdayvalid(input, errors){
  if (input.length !== 0){
  birthdate.className = "text-control";
  document.getElementById("errordate").className = "error";
  document.getElementById('errordate').innerHTML="";
  errors.push(true);
  return this.errors}
  else {
    birthdate.className = "input-error";
    document.getElementById("errordate").className = "error-show";
    document.getElementById('errordate').innerHTML="Veuillez entrer votre date de naissance.";
  errors.push(false);
  return this.errors}
};

function RadioChecked(errors){
  for (var item of locationRadio) {
    console.log(item.id);
    if (item.checked == true){
      document.getElementById("errorradio").className = "error";
      document.getElementById('errorradio').innerHTML="";
      errors.push(true);
      return this.errors}

      else if( item.checked == false && item.id == "location6" ){
        document.getElementById("errorradio").className = "error-show";
        document.getElementById('errorradio').innerHTML="Vous devez choisir une option.";
        errors.push(false);
        return this.errors;}

      else {
        document.getElementById("errorradio").className = "error-show";
        document.getElementById('errorradio').innerHTML="Vous devez choisir une option.";}
};
}

function CGChecked(input, errors){
  if (input.checked == true){
  document.getElementById("errorcg").className = "error";
  document.getElementById('errorcg').innerHTML="";
  errors.push(true);
  return this.errors}
  else {
    document.getElementById("errorcg").className = "error-show";
    document.getElementById('errorcg').innerHTML="Vous devez vérifier que vous acceptez les termes et conditions.";
  errors.push(false);
  return this.errors}
};
