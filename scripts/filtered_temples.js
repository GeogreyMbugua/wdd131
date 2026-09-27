// open and close the mobile navigation
// change the hamburger symbol to an x
// update accessibility information
// insert the current year into the footer
// insert the page last modified date
const temples = [
    {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/800x500/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/800x500/manti-temple-759208-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-daylight-1416668-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_interior_celestial_room.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x225/NorthBirdsEye.jpg"
  },
  {
    templeName: "St. George Utah",
    location: "St. George, Utah, United States",
    dedicated: "1877, May, 1",
    area: 143000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-temple-758796-wallpaper.jpg"
  },
  {
    templeName: "Bern Switzerland",
    location: "Münchenbuchsee, Switzerland",
    dedicated: "1955, September, 11",
    area: 35000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-784288-wallpaper.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 29000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo_japan_temple-recommend-desk.jpeg"
  }
];


// select the html elements from the dom so that we can work on them
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#main-navigation");
const templeGrid = document.querySelector(".temple-grid");
const navLinks = document.querySelectorAll("#main-navigation a")






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

// Temple rendering and filtering

// Extracting the dedication year from the dedicated string

function getYear(dedicatedString) {
  const year = parseInt(dedicatedString.split(",")[0], 10);
  return isNaN(year) ? 0: year;
}

// Build a temple card from a temple object

 function createTempleCard(temple) {
  const figure = document.createElement("figure");

  figure.innerHTML = `
  <img
   src="${temple.imageUrl}"
   alt="${temple.templeName}"
   loading="lazy"
   width="400"
   height="250"
  /> 
  <figcaption>
    <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>

  </figcaption>
   `;

   return figure;
 }

//  Render the list of temples into the grid

function renderTemples(temples) {
  templeGrid.innerHTML= "";
  temples.forEach(temple =>{
    templeGrid.appendChild(createTempleCard(temple))
  });

}


// filter helpers

function filterOld(list) {
  return list.filter(t=> getYear(t.dedicated) < 1900);
}

function filterNew(list) {
  return list.filter(t=> getYear(t.dedicated) > 2000);
}

function filterLarge(list) {
  return list.filter(t=> t.area > 90000);
}

function filterSmall(list) {
  return list.filter(t=> t.area < 10000);
}

// Lets handle the navigation menu clicks

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const filter= link.textContent.trim().toLowerCase();
    let filtered;

    switch(filter) {
      case "old":
        filtered = filterOld(temples);
        break;
        case "new":
          filtered = filterNew(temples);
        break;
        case "large":
          filtered = filterLarge(temples);
        break;
        case "small":
          filtered = filterSmall(temples);
        break;
        case "home":
          filtered = temples;
        break;
        default:
          filtered = temples;
    }

    renderTemples(filtered);
  });
});

// initia render state: Shows all temples
renderTemples(temples);
