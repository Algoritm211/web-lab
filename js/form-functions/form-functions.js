export function popupOpen(data) {
  document.querySelector(".popup").classList.add("popup__active");
  document.body.style.overflow = "hidden";
  document.querySelector('.popup__data').innerHTML = `
  <div style="max-width: 300px;">
  В форму попадут такие данные: <br>
  ${data}
  </div>
  `
}

export function closePopup() {
  document.querySelector(".popup").classList.remove("popup__active");
  document.body.style.overflow = "visible";
}
