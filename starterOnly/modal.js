function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));



// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {

  var elements_error = document.getElementsByClassName("error-show");

  while(elements_error.length > 0){
            elements_error[0].className = "error";
        };

var elements_input = document.getElementsByClassName("input-error");
        while(elements_input.length > 0){
                  elements_input[0].className = "text-control";
};

  document.getElementById("form").reset();
  modalbg.style.display = "none";
  document.getElementById("valid-content").style.display = "none";
  document.getElementById("valid").style.display = "none";
}

// .className = "error";
