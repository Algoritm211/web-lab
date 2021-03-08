import {closePopup, popupOpen} from "./form-functions";
import $ from 'jquery';

const message = {
  loading: 'Загрузка...',
  success: 'Спасибо, данные ушли на сервер',
  failure: 'Что-то пошло не так, попробуйте еще раз'
}

export function formSubmitVanillaJS(form) {
  const popup = document.querySelector(".popup")
  popup.classList.add("popup__active")


  const statusMessage = document.createElement('div')
  const serverData = document.createElement('div')
  serverData.classList.add('serverData')
  serverData.innerHTML = 'На сервер вы отправили такие данные: <br>'
  statusMessage.classList.add('status')
  statusMessage.textContent = message.loading
  popup.querySelector('.popup__data').append(serverData)
  popup.querySelector('.popup__data').append(statusMessage)

  const request = new XMLHttpRequest();

  request.open('POST', 'server.php')
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
  // При пост-запросе НЕ ДЛЯ JSON не указывать хедеры
  const formData = new FormData(form)

  const obj = {}

  // логика для JSON
  formData.forEach(function (value, key) {
    obj[key] = value
  })

  const json = JSON.stringify(obj)

  request.send(json)

  request.addEventListener('load', () => {
    if (request.status === 200) {
      console.log(request.response);
      serverData.innerHTML += request.response
      statusMessage.textContent = message.success
      form.reset()
      setTimeout(() => {
        statusMessage.remove()
        serverData.innerHTML = ''
        statusMessage.textContent = ''
        closePopup()
      }, 10000)
    } else {
      serverData.innerHTML = ''
      statusMessage.textContent = message.failure
    }
  })
}


