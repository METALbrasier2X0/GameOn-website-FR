
// DOM Elements
const modalForm = document.querySelector(".bground");
const modalvalid = document.querySelector(".valid-modal");
const modalvalidBtn = document.querySelector(".valid-modal-btn");
const submitvalidBtn = document.querySelector(".btn-submit");

// Confirm messages

function validate() {
  modalvalid.style.display = "block";
  modalbg.style.display = "none";
  document.getElementById("valid").className = "valid-modal";
};


// close modal validation
function closeValidModal() {
  document.getElementById("valid").className = "MyClass";
};
