const bookingForm = document.querySelector("#booking-form");
const formStatus = document.querySelector("#form-status");

if (!bookingForm || !formStatus) {
  console.error(
    "Booking form behavior could not start because a required element is missing."
  );
} else {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formStatus.textContent =
      `This is a project demo. Your inquiry was not sent or stored.`;
  });
}