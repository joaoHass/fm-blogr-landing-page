/// HAMBURGUER

const nav = document.querySelector("nav"),
  ham = document.querySelector(".hamburguer"),
  xIcon = document.querySelector(".xIcon"),
  menuIcon = document.querySelector(".menuIcon"),
  header = document.querySelector("header");

ham.addEventListener("click", toggleMenu);

// toggle menu in and out when clicking on the hamburger
function toggleMenu() {
  if (nav.classList.contains("showMenu")) {
    nav.classList.remove("showMenu");
    bodyScrollLock.enableBodyScroll(nav);
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    nav.classList.add("showMenu");
    bodyScrollLock.disableBodyScroll(nav);
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

//
//// SUBMENUS

function dropdownSwitch(event) {
  event.currentTarget.nextElementSibling.classList.toggle("show-dropdown");
}

//
