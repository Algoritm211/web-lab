import $ from "jquery";
import {closePopup} from "./form-functions";
import {SERVER_URL} from "../assets/server-data";
import {createUser} from "./fetch-users-data";
const message = {
  loading: 'Загрузка...',
  success: 'Спасибо, данные ушли на сервер',
  failure: 'Что-то пошло не так, попробуйте еще раз'
}


export function formSendJQuery(form) {
  const popup = document.querySelector(".popup")
  popup.classList.add("popup__active")


  const statusMessage = document.createElement('div')
  const serverData = document.createElement('div')
  serverData.classList.add('serverData')
  serverData.innerHTML = 'На сервер вы отправили такие данные через JQuery: <br>'
  statusMessage.classList.add('status')
  statusMessage.textContent = message.loading
  popup.querySelector('.popup__data').append(serverData)
  popup.querySelector('.popup__data').append(statusMessage)

  const formData = new FormData(form)

  const obj = {}
  // логика для JSON
  formData.forEach(function (value, key) {
    obj[key] = value
  })


  $.ajax({
    url: `${SERVER_URL}/api/user`,
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(obj),
    success: (data, textStatus) => {
      if (textStatus === 'success') {
        serverData.innerHTML += JSON.stringify(data, null, 2)
        statusMessage.textContent = message.success
        form.reset()
        createUser(data)
        setTimeout(() => {
          statusMessage.remove()
          serverData.innerHTML = ''
          statusMessage.textContent = ''
          closePopup()
        }, 10000)
      }
    },
    error: (jqXHR, textStatus, errorThrown) => {
      console.log(textStatus)
      console.log(errorThrown)
      serverData.innerHTML = ''
      statusMessage.textContent = message.failure
    }
  })

}
