
import {closePopup, } from "./form-functions/form-functions";

import {formValidateAndSubmit} from "./form-functions/form-validate";
import {deleteAllUsersFromDB, fetchUserData, getTopTenUsers, getUserLength} from "./form-functions/fetch-users-data";

window.addEventListener("DOMContentLoaded", () => {

  const buttonClosePopup = document.querySelector(".popup__close");


  const getAllUsersButton = document.querySelector('.all_requests')
  const getTopTen = document.querySelector('.first_10')
  const deleteAllUsers = document.querySelector('.delete_all')
  getUserLength()

  getAllUsersButton.addEventListener('click', () => {
    fetchUserData()
  })

  getTopTen.addEventListener('click', () => {
    getTopTenUsers()
  })

  deleteAllUsers.addEventListener('click', () => {
    deleteAllUsersFromDB()
  })

  const form = document.querySelector('.form')

  formValidateAndSubmit()

  buttonClosePopup.addEventListener('click', closePopup)
  // fetchUserData()
})
