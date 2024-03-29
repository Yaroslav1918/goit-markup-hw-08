(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu-open"),
    closeMenuBtn: document.querySelector(".menu-close"),
    menu: document.querySelector(".mobile-nav"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("backdrop--is-hidden");
  }
})();
