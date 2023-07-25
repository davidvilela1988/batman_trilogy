document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let index = 0; index < buttons.length; index += 1) {
    buttons[index].addEventListener("click", function (button) {
      const openTab = button.target.dataset.tabButton;
      const tab = document.querySelector(`[data-tab-id=${openTab}]`);
      hideTabs();
      tab.classList.add("shows__list--is-active");
      removeButton();
      button.target.classList.add("shows__tabs__button--is-active");
    });
  }
});

function removeButton() {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let index = 0; index < buttons.length; index += 1) {
    buttons[index].classList.remove("shows__tabs__button--is-active");
  }
}

function hideTabs() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");

  for (let index = 0; index < tabsContainer.length; index += 1) {
    tabsContainer[index].classList.remove("shows__list--is-active");
  }
}
