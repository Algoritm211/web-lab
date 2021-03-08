
import {closePopup, } from "./form-functions/form-functions";

import {formValidateAndSubmit} from "./form-functions/form-validate";
import {deleteUser, fetchUserData} from "./form-functions/fetch-users-data";

window.addEventListener("DOMContentLoaded", () => {

  const buttonClosePopup = document.querySelector(".popup__close");
  const userContentSection = document.querySelector('.user__content')

  userContentSection.addEventListener('click', (event) => {

    if (event.target && event.target.classList.contains('delete__userCard')) {
      const id = event.target.getAttribute('data-id')
      deleteUser(id)
    }

  })


  const form = document.querySelector('.form')

  formValidateAndSubmit()

  buttonClosePopup.addEventListener('click', closePopup)
  fetchUserData()
})
