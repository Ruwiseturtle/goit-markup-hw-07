(() => {
  const refs = {
    openMenuBtn: document.querySelector("[js-menu-open]"),
    closeMenuBtn: document.querySelector("[js-menu-close]"),
    menu: document.querySelector("[js-menu-container]"),
  };

  refs.openMenuBtn.addEventListener("click", menuOpen);
  refs.closeMenuBtn.addEventListener("click", menuClose);

  function menuOpen() {
    refs.menu.classList.toggle("menu-closed");
    document.body.classList.add("open");
  }
  function menuClose() {
    refs.menu.classList.add("menu-closed");
    document.body.classList.toggle("open");
  }

})();