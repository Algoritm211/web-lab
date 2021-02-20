import {closePopup} from "../form-functions/form-functions";

export function popupNotification(modalTimerId) {
  document.querySelector(".popup").classList.add("popup__active");
  document.body.style.overflow = "hidden";
  const buttonClosePopup = document.querySelectorAll(".popup__btn-close");
  const infoRedirectToFormButton = document.querySelector('[data-link]')

  infoRedirectToFormButton.addEventListener('click', () => {
    document.location = 'formgrad.html'
    closePopup()
  })

  buttonClosePopup.forEach(button => {
    button.addEventListener('click', closePopup)
  })

}
