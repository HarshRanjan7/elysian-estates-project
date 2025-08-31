document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const closePopupBtn = popup.querySelector(".popup__close");
  const contactAgentBtns = document.querySelectorAll(".home__btn");

  // Function to open the popup and populate it with data
  const openPopup = (homeElement) => {
    // 1. Get data from the clicked home card
    const imgSrc = homeElement.querySelector(".home__img").src;
    const name = homeElement.querySelector(".home__name").textContent;
    const location = homeElement.querySelector(".home__location p").textContent;
    const rooms = homeElement.querySelector(".home__rooms p").textContent;
    const area = homeElement.querySelector(".home__area p").innerHTML; // Use innerHTML to keep <sup> tag
    const price = homeElement.querySelector(".home__price p").textContent;

    // 2. Get agent data from data-* attributes
    const agentName = homeElement.dataset.agentName;
    const agentPhone = homeElement.dataset.agentPhone;
    const agentEmail = homeElement.dataset.agentEmail;

    // 3. Populate the popup with the data
    popup.querySelector(".popup__img").src = imgSrc;
    popup.querySelector(".popup__name").textContent = name;
    popup.querySelector("#popup-location").textContent = location;
    popup.querySelector("#popup-rooms").textContent = rooms;
    popup.querySelector("#popup-area").innerHTML = area; // Use innerHTML
    popup.querySelector("#popup-price").textContent = price;
    popup.querySelector("#popup-agent-name").textContent = agentName;
    popup.querySelector("#popup-agent-phone").textContent = agentPhone;
    popup.querySelector("#popup-agent-email").textContent = agentEmail;

    // 4. Show the popup
    popup.classList.add("visible");
  };

  // Function to close the popup
  const closePopup = () => {
    popup.classList.remove("visible");
  };

  // Add event listeners to all "Contact agent" buttons
  contactAgentBtns.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const homeCard = this.closest(".home");
      openPopup(homeCard);
    });
  });

  // Add event listener to the close button
  closePopupBtn.addEventListener("click", function (event) {
    event.preventDefault();
    closePopup();
  });

  // Add event listener to the popup background to close it
  popup.addEventListener("click", function (event) {
    // If the clicked element is the popup background itself
    if (event.target === this) {
      closePopup();
    }
  });

  // Add event listener for the 'Escape' key to close the popup
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && popup.classList.contains("visible")) {
      closePopup();
    }
  });
});