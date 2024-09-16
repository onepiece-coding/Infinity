/* Get Html Elements */

const toggleMenuBtnEl = document.querySelector(".toggle-menu-btn");

const navbarEl = document.querySelector(".navbar");

const toTopBtnEl = document.getElementById("to-top-btn");

/* Toggle (open / close) Navigation Menu */

toggleMenuBtnEl.addEventListener("click", () => {
  if (navbarEl.classList.contains("open")) {
    navbarEl.classList.remove("open");
    toggleMenuBtnEl.innerHTML = `
      <ion-icon 
      name="menu-outline"
      class="toggle-menu-icon"
      ></ion-icon>
    `;
  } else {
    navbarEl.classList.add("open");
    toggleMenuBtnEl.innerHTML = `
      <ion-icon 
      name="close-outline" 
      class="toggle-menu-icon"
      ></ion-icon>
    `;
  }
});

/* Show - Hide To Top Button */

window.addEventListener("scroll", () => {
  if (window.scrollY > 96) {
    toTopBtnEl.classList.add("show");
  } else {
    toTopBtnEl.classList.remove("show");
  }
});

/* Scroll To Top On Click To Top Button */

toTopBtnEl.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
