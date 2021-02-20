import $ from 'jquery-validation'
import {closePopup, popupOpen} from "./form-functions/form-functions";
import {baseJSValidation, jqueryValidation} from "./form-functions/form-validation";

window.addEventListener("DOMContentLoaded", () => {
  const submitForm = document.querySelector(".form");
  const buttonClosePopup = document.querySelector(".popup__close");

  baseJSValidation()
  jqueryValidation()

  buttonClosePopup.addEventListener('click', closePopup);
})
