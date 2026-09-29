const toggleButtons = document.querySelectorAll("[data-toggle]");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.toggle);

    if (!target) {
      return;
    }

    const isOpen = target.classList.toggle("is-open");
    button.classList.toggle("is-open", isOpen);
    button.setAttribute("aria-expanded", String(isOpen));
    button.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
  });
});

const navLinks = document.querySelectorAll(".nav__link");
const headerMenu = document.querySelector("#header-menu");
const headerToggle = document.querySelector(".header__toggle");
const mobileQuery = window.matchMedia("(max-width: 1100px)");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => {
      item.classList.remove("is-active");
    });
    link.classList.add("is-active");

    if (!mobileQuery.matches || !headerMenu || !headerToggle) {
      return;
    }

    headerMenu.classList.remove("is-open");
    headerToggle.classList.remove("is-open");
    headerToggle.setAttribute("aria-expanded", "false");
    headerToggle.setAttribute("aria-label", "Открыть меню");
  });
});
