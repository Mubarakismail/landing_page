/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const sections = document.getElementsByTagName("section");
const ulList = document.getElementById("navbar__list");

for (let index = 0; index < sections.length; index++) {
  const nav_link = document.createElement("a");
  nav_link.classList.add("menu__link");
  nav_link.href = "#" + sections[index].id;
  nav_link.id = "#" + sections[index].id;
  nav_link.textContent = sections[index].id;
  const li = document.createElement("li");
  li.appendChild(nav_link);
  ulList.appendChild(li);
}
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

const links = document.getElementsByTagName("a");

for (let index = 0; index < links.length - 1; index++) {
  const element = links[index];
  element.addEventListener("click", function (e) {
    // remove active className from all links
    for (const ele of links) {
      if (ele.parentElement.classList.contains("active") === true) {
        ele.parentElement.classList.remove("active");
      }
    }

    // add active to current clicked link
    element.parentElement.classList.add("active");
    e.preventDefault();

    // getting section by section_id
    let idOfSection = element.id;
    // removing hash sign from name of id (#section1 ==> section1)
    idOfSection = idOfSection.slice(1);
    const section = document.getElementById(idOfSection);
    const allSections = document.getElementsByTagName("section");

    // removing active className from all sections
    for (const ele of allSections) {
      if (ele.classList.contains("active") === true) {
        ele.classList.remove("active");
      }
    }
    section.classList.add("active");

    //smooth scroll to section offset
    const offsetTop = section.offsetTop;
    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  });
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

// Responsive navbar

const toggle_button = document.getElementsByClassName("toggle_button")[0];

toggle_button.addEventListener("click", function () {
  toggle_button.childNodes.forEach(function (item) {
    if (item.nodeName === "SPAN")
      item.style.backgroundColor = changeBackgroundColor(item);
  });
  const listOfLinks = document.getElementById("navbar__list");
  listOfLinks.childNodes.forEach(function (item) {
    item.style.display = changeDisplay(item);
  });

  function changeBackgroundColor(item) {
    if (item.style.backgroundColor != "rgb(0, 0, 0)") return "#000";
    else return "#fff";
  }
  function changeDisplay(item) {
    if (item.style.display === "block") return "none";
    else return "block";
  }
});

window.addEventListener("resize", function () {
  if (document.body.clientWidth > 850) {
    toggle_button.childNodes.forEach(function (item) {
      if (item.nodeName === "SPAN") item.style.backgroundColor = "#000";
    });
    const listOfLinks = document.getElementById("navbar__list");
    listOfLinks.childNodes.forEach(function (item) {
      item.style.display = "inline-block";
    });
  } else {
    toggle_button.childNodes.forEach(function (item) {
      if (item.nodeName === "SPAN") item.style.backgroundColor = "#000";
    });
  }
});
