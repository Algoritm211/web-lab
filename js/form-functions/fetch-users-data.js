import {SERVER_URL} from "../assets/server-data";
import $ from 'jquery'


const userCard = (firstName, lastName, email, phone, _id) => {
  const node = `
  <div class="user__card" data-elem-id="${_id}">
        <div class="icon__status">
          <i class="fas fa-check-circle"></i>
        </div>
        <div class="card__content">
          <div class="card__content-title">
            Ваша заявка оформлена!<br>
            Уже скоро вас опубликуют на сайте
          </div>
          <div class="card__content-info">
            <div class="card__content-info-title">
              Вы ввели такие данные:
            </div>
            <div class="content__ceil">
              <span>Имя:</span> ${firstName}
            </div>
            <div class="content__ceil">
              <span>Фамилия:</span> ${lastName}
            </div>
            <div class="content__ceil">
              <span>Почта:</span> ${email}
            </div>
            <div class="content__ceil">
              <span>Телефон:</span> ${phone}
            </div>
          </div>
          <div class="delete__userCard" data-id="${_id}">Отменить заявку</div>
        </div>
      </div>
  `

  return node
}


export function fetchUserData() {
  $.get(`${SERVER_URL}/api/user`, null, getUserDataSuccess)

  function getUserDataSuccess(users) {
    let usersNode = ``

    users.forEach(({firstName, lastName, email, phone, _id}) => {
      const usersCard = userCard(firstName, lastName, email, phone, _id)
      usersNode += usersCard
    })

    const userCardSection = document.querySelector('.user__content')

    userCardSection.insertAdjacentHTML('afterbegin', usersNode)
  }
}

export function deleteUser(id) {
  $.ajax({
    url: `${SERVER_URL}/api/user?userId=${id}`,
    type: 'DELETE',
    success: successDeleting
  })

  function successDeleting(data) {
    const userBlock = document.querySelector(`.user__card[data-elem-id="${id}"]`)
    userBlock.remove()
  }
}

export function createUser(newUserData) {

  const {firstName, lastName, email, phone, _id} = newUserData
  const usersCard = userCard(firstName, lastName, email, phone, _id)
  const userCardSection = document.querySelector('.user__content')

  userCardSection.insertAdjacentHTML('beforeend', usersCard)
}
