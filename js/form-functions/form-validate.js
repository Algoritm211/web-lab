import $ from "jquery-validation";
// import {formSubmitVanillaJS} from "./form-submit-pure";
import {formSendJQuery} from "./form-submit-jquery";


export function formValidateAndSubmit() {

  $('form').validate({
    // Validation rules
    rules: {
      firstName: {
        required: true
      },
      lastName: {
        required: true
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
      subscription: {},
      linkTwitter: {},
      linkFacebook: {},
      linkLinkedin: {},
      linkTelegram: {},
      linkVK: {},
    },
    // Messages if not valid
    messages: {
      firstName: 'Must be not empty',
      lastName: 'Must be not empty',
      email: 'Must be a valid e-mail address',
      phone: 'Must contain only digits and "+"',
    },
    submitHandler: function (form) {
      // const submitMethod = prompt('Если хотите, чтобы форма была отправлена на сервер через нативный JS, введите 1, если через JQuery - нажмите 2')

      // if (submitMethod === '1') {
      //   formSubmitVanillaJS(form)
      // } else {
      formSendJQuery(form)
      // }
      // commented code was useful in lab 4
    }
  })

}
