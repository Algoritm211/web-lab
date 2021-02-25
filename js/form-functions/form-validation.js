import $ from "jquery-validation";
import {popupOpen} from "./form-functions";


export function jqueryValidation() {
  $('form').validate({
    // Validation rules
    rules: {
      firstName: {},
      lastName: {},
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
      email: 'Must be a valid e-mail address',
      phone: 'Must contain only digits and "+"',
    },
    submitHandler: function (form) {
      const data = new FormData(form)
      let object = {};
      data.forEach((value, key) => {
        object[key] = value
      });
      let json = JSON.stringify(object, 2, 2);
      console.log(json)
      popupOpen(json)
    }
  })
}


export function baseJSValidation() {
  let isFormValid = true
  const form = document.querySelector('form')

  const nameInput = document.querySelector('[data-input-name]')
  const surnameInput = document.querySelector('[data-input-surname]')

  const inputsArray = [nameInput, surnameInput]

  inputsArray.forEach((input) => {
    input.addEventListener('blur', (event) => {
      const value = event.target.value
      const elemNameAttr = event.target.getAttribute('name')

      if (value.trim().length === 0) {
        const errorElem = errorLayout('Поле не может быть пустым', elemNameAttr)
        input.insertAdjacentHTML('afterend', errorElem)
        isFormValid = false
      } else if (!value.trim().match("^[А-Яа-яЁёЇїІіЄєҐґ']+$")) {
        const errorElem = errorLayout('Вводите только кириллицу', elemNameAttr)
        input.insertAdjacentHTML('afterend', errorElem)
        isFormValid = false
      } else {
        isFormValid = true
      }
    })
  })

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (!isFormValid) {
      alert('Правильно заполните форму')
    }
  })

}


function errorLayout(text, selectorName) {

  const errorLabel = `
  <label id="${selectorName}-error" class="error" for="${selectorName}">
    ${text}
  </label>
  `

  return errorLabel
}
