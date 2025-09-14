document.addEventListener("DOMContentLoaded", () => {
  const btnToggle = document.querySelector("#toggle-dark");
  const btnToggleMobile = document.querySelector("#toggle-dark-mobile");
  const iconToggle = document.querySelector("#icon-toggle");
  const iconToggleMobile = document.querySelector("#icon-toggle-mobile");
  const html = document.documentElement;
  const btnTop = document.querySelector("#btn-top");
  const btnMenu = document.querySelector("#toggle-mobile-menu");
  const mobileMenu = document.querySelector("#mobile-menu");
  const btnCloseMobile = document.querySelector("#btn-close-mobile");

  // oculto al inicio porque ya estpa en el top!
  btnTop.style.display = "none";

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      btnTop.style.display = "flex";
    } else {
      btnTop.style.display = "none";
    }
  });

  btnTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // detectar el tema del sistema o local storage
  if (
    window.localStorage.theme === "dark" ||
    (!("theme" in window.localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    html.classList.add("dark");
    iconToggle.classList.remove("fa-moon");
    iconToggle.classList.add("fa-sun");
    iconToggleMobile.classList.remove("fa-moon");
    iconToggleMobile.classList.add("fa-sun");
  } else {
    html.classList.remove("dark");
    iconToggle.classList.remove("fa-sun");
    iconToggle.classList.add("fa-moon");
    iconToggleMobile.classList.remove("fa-sun");
    iconToggleMobile.classList.add("fa-moon");
  }

  // si hace click en el botón
  btnToggle.addEventListener("click", () => {
    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
      iconToggle.classList.remove("fa-moon");
      iconToggle.classList.add("fa-sun");
      window.localStorage.theme = "dark";
    } else {
      iconToggle.classList.remove("fa-sun");
      iconToggle.classList.add("fa-moon");
      window.localStorage.theme = "light";
    }
  });
  btnToggleMobile.addEventListener("click", () => {
    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
      iconToggleMobile.classList.remove("fa-moon");
      iconToggleMobile.classList.add("fa-sun");
      window.localStorage.theme = "dark";
    } else {
      iconToggleMobile.classList.remove("fa-sun");
      iconToggleMobile.classList.add("fa-moon");
      window.localStorage.theme = "light";
    }
  });

  btnMenu.addEventListener("click", () => mobileMenu.showModal());
  btnCloseMobile.addEventListener("click", () => mobileMenu.close());

  mobileMenu.querySelectorAll("li").forEach((link) => {
    link.addEventListener("click", () => mobileMenu.close());
  });
});
