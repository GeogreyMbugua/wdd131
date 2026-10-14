function updateFooterDates() {
  const currentYear = document.querySelector("#currentyear");
  const lastModified = document.querySelector("#lastModified");

  if (currentYear) {
    currentYear.textContent = `${new Date().getFullYear()}`;
  }

  if (lastModified) {
    const modifiedDate = new Date(document.lastModified);

    if (Number.isNaN(modifiedDate.getTime())) {
      console.error("The page's last-modified date could not be read.");
      return;
    }

    const formattedDate = modifiedDate.toLocaleDateString("en-KE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    lastModified.textContent = `Last modified: ${formattedDate}`;
  }
}

updateFooterDates();