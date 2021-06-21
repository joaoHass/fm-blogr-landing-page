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
const getSiblings = function (e) {
  // for collecting siblings
  let siblings = [];
  // if no parent, return no sibling
  if (!e.parentElement) {
    return siblings;
  }
  // first element child of the parent node
  let sibling = e.parentElement.firstElementChild;

  // collecting siblings
  while (sibling) {
    if (sibling !== e) {
      siblings.push(sibling);
    }
    sibling = sibling.nextElementSibling;
  }
  return siblings;
};

function showMenu(e) {
  let siblings = getSiblings(e.currentTarget);

  if (e.currentTarget.classList.contains("show-dropdown")) {
    e.currentTarget.querySelector("ul").classList.remove("show-dropdown");
  } else {
    // check for the class in each sibling
    siblings.forEach((el) => {
      if (el.querySelector("ul").classList.contains("show-dropdown")) {
        // if it has, remove it
        el.querySelector("ul").classList.remove("show-dropdown");
      }
    });

    e.currentTarget.querySelector("ul").classList.toggle("show-dropdown");
  }
}

//
