const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const productSelect = document.querySelector("#product-name");

if (productSelect) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

const reviewCountDisplay = document.querySelector("#review-count");

if (reviewCountDisplay) {
    const savedCount = Number(localStorage.getItem("reviewCount")) || 0;
    const currentCount =
        Number.isFinite(savedCount) && savedCount >= 0 ? savedCount : 0;
    const newCount = currentCount + 1;
    localStorage.setItem("reviewCount", String(newCount));
    reviewCountDisplay.textContent = `Total Reviews Completed: ${newCount}`;
}    