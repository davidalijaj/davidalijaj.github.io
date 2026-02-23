(function(){
  const year = document.querySelectorAll("[data-year]");
  year.forEach(el => el.textContent = new Date().getFullYear());

  // Mobile drawer
  const btn = document.querySelector("[data-menu-btn]");
  const drawer = document.querySelector("[data-drawer]");
  const closeBtn = document.querySelector("[data-drawer-close]");

  if(btn && drawer){
    const open = () => drawer.classList.add("open");
    const close = () => drawer.classList.remove("open");

    btn.addEventListener("click", open);
    closeBtn && closeBtn.addEventListener("click", close);
    drawer.addEventListener("click", (e) => {
      if(e.target === drawer) close();
    });
    document.addEventListener("keydown", (e) => {
      if(e.key === "Escape") close();
    });
  }
})();
