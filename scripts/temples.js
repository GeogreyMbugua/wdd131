// open and close the mobile navigation
// change the hamburger symbol to an x
// update accessibility information
// insert the current year into the footer
// insert the page last modified date

// select the html elements from the dom so that we can work on them
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#main-navigation");



// we want to listen for a click
menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("show");
  menuButton.textContent = isOpen ? "✕" : "☰";

  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation",
  );

  menuButton.setAttribute("aria-expanded", String(isOpen));
});

const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`