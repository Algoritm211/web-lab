import {tabsFunctionality} from "./mainPage-functions/tabs";
import {popupNotification} from "./popup-notification/popup-notification";

window.addEventListener("DOMContentLoaded", () => {
  tabsFunctionality()
  setTimeout(popupNotification, 6000)
})
