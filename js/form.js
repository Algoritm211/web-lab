import $ from 'jquery-validation'
import {closePopup, popupOpen} from "./form-functions/form-functions";

window.addEventListener("DOMContentLoaded", () => {
  const submitForm = document.querySelector(".form");
  const buttonClosePopup = document.querySelector(".popup__close");


    $('form').validate({
      // Validation rules
      rules: {
        firstName: 'required',
        lastName: 'required',
        linkSocial: {
          url: true,
        },
        email: {
          required: true,
          email: true,
        },
        phone: {
          minlength: 10,
          maxlength: 10
        },
        courseSelect: {},
        subscription: {}
      },
      // Messages if not valid
      messages: {
        firstName: 'This field is required',
        lastName: 'This field is required',
        email: 'Must be a valid e-mail adress',
        phone: 'Must contain only digits and "+"',
      },
      submitHandler: function(form) {
        const data = new FormData(form)
        let object = {};
        data.forEach((value, key) => {object[key] = value});
        let json = JSON.stringify(object, 2, 2);
        console.log(json)
        popupOpen(json)
      }
    })

  buttonClosePopup.addEventListener('click', closePopup);
})
