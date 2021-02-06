



window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabs__item");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.classList.contains("tabs__item_active")) {
        tab.classList.remove("tabs__item_active");
      } else {
        tab.classList.add("tabs__item_active");
      }
    });
  });
})
