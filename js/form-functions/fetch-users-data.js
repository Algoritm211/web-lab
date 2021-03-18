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


const userCellTable = (firstName, email, _id) => {
  const node = `
    <tr class="table__row" data-elem-tableid="${_id}">
      <th scope="row">${_id}</th>
      <td>${firstName}</td>
      <td>${email}</td>
    </tr>
  `
  return node
}

const removeAll = () => {
  if (document.querySelector('.user__content')) {
    document.querySelector('.user__content').remove()
  }
  if (document.querySelector('.user__table')) {
    document.querySelector('.user__table').remove()
  }
}


export function fetchUserData() {
  removeAll()

  const tableStartNode = `
  <section class="user__table">
      <table class="table table-borderless">
        <thead class="tableCell">
        <tr>
          <th scope="col">#(id)</th>
          <th scope="col">FirstName</th>
          <th scope="col">Email</th>
        </tr>
        </thead>
        <tbody class="tableCell table__body" data-table-body>

        </tbody>
      </table>
    </section>
  `
  document.querySelector('main').insertAdjacentHTML('beforeend', tableStartNode)


  $.get(`${SERVER_URL}/api/user`, null, getUserDataSuccess)
  getUserLength()

  function getUserDataSuccess(users) {
    let usersTableNode = ``
    console.log(users)
    users.forEach(({firstname, lastname, email, phone, id}) => {
      const userRow = userCellTable(firstname, email, id)
      usersTableNode += userRow
    })

    const userTableRows = document.querySelector('.table__body')
    userTableRows.insertAdjacentHTML('afterbegin', usersTableNode)
  }
}


export function getTopTenUsers() {
  removeAll()
  const blocksStartNode = `
  <section class="user__content">

  </section>
  `
  document.querySelector('main').insertAdjacentHTML('beforeend', blocksStartNode)


  $.get(`${SERVER_URL}/api/user/ten`, null, getUserDataSuccess)

  function getUserDataSuccess(users) {
    let usersBlockNode = ``
    console.log(users)
    users.forEach(({firstname, lastname, email, phone, id}) => {
      const userBlock = userCard(firstname, lastname, email, phone, id)
      usersBlockNode += userBlock
    })

    const userBlocks= document.querySelector('.user__content')
    userBlocks.insertAdjacentHTML('afterbegin', usersBlockNode)
    const userContentSection = document.querySelector('.user__content')
    userContentSection.addEventListener('click', (event) => {

      if (event.target && event.target.classList.contains('delete__userCard')) {
        const id = event.target.getAttribute('data-id')
        deleteUser(id)
      }

    })
  }
}


export function deleteUser(id) {
  $.ajax({
    url: `${SERVER_URL}/api/user?userId=${id}`,
    type: 'DELETE',
    success: successDeleting
  })

  function successDeleting(data) {
    getUserLength()
    const userBlock = document.querySelector(`.user__card[data-elem-id="${id}"]`)
    const userTableRow = document.querySelector(`.table__row[data-elem-tableid="${id}"]`)
    userBlock?.remove()
    userTableRow?.remove()
  }
}

export function createUser(newUserData) {

  const {firstName, lastName, email, phone, id} = newUserData
  const usersCard = userCard(firstName, lastName, email, phone, id)
  const userRow = userCellTable(firstName, email, id)
  const userCardSection = document.querySelector('.user__content')
  const userTableBody = document.querySelector('.table__body')

  getUserLength()
  userTableBody.insertAdjacentHTML('beforeend', userRow)
  userCardSection.insertAdjacentHTML('beforeend', usersCard)
}

export function deleteAllUsersFromDB() {
  $.ajax({
    url: `${SERVER_URL}/api/user/removeall`,
    type: 'DELETE',
    success: successDeleting
  })

  function successDeleting(data) {
    getUserLength()
    const userBlock = document.querySelector(`.user__content`)
    const userTableRow = document.querySelector(`.table__body`)
    if (userBlock) {
      userBlock.innerHTML = ''
    } else if (userTableRow) {
      userTableRow.innerHTML = ''
    }
  }
}

export function getUserLength() {
  const userCountNode = document.querySelector('.request__length')

  $.get(`${SERVER_URL}/api/user/count`, null, getUserLengthSuccess)

  function getUserLengthSuccess(data) {
    userCountNode.textContent = `Количество заявок: ${data.count}`
  }

}
