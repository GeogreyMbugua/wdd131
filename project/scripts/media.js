const mediaForm = document.querySelector(".media-controls");
const searchInput = document.querySelector("#media-search");
const categorySelect = document.querySelector("#media-category");
const mediaCards = document.querySelectorAll(".media-main .highlight-card");
const resultsMessage = document.querySelector(".media-results");
const emptyMessage = document.querySelector(".media-empty-message");
const favoriteButtons = document.querySelectorAll(
  "[data-favorite-button]"
);
const favoritesStatus = document.querySelector(".favorites-status");
const FAVORITES_STORAGE_KEY = "parrotMediaFavorites.v1";
if (
  !mediaForm ||
  !searchInput ||
  !categorySelect ||
  mediaCards.length === 0 ||
  !resultsMessage ||
  !favoritesStatus ||
  !emptyMessage
) {
  console.error(
    "Media filters could not start: a required page element is missing.",
  );
} else {
    function loadFavorites() {
    try {
      const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
  
      if (storedFavorites === null) {
        return new Set();
      }
  
      const parsedFavorites = JSON.parse(storedFavorites);
  
      if (
        !Array.isArray(parsedFavorites) ||
        !parsedFavorites.every((id) => typeof id === "string")
      ) {
        throw new TypeError("Stored favorites must be an array of IDs.");
      }
  
      const validIds = new Set(
        Array.from(mediaCards, (card) => card.dataset.mediaId)
      );
  
      return new Set(
        parsedFavorites.filter((id) => validIds.has(id))
      );
    } catch (error) {
      console.error("Could not load saved favorites.", error);
      favoritesStatus.textContent =
        `Saved favorites could not be loaded. You can still save favorites for this visit.`;
      return new Set();
    }
  }
  
  const favoriteIds = loadFavorites();
  
  function saveFavorites() {
    try {
      localStorage.setItem(
        FAVORITES_STORAGE_KEY,
        JSON.stringify([...favoriteIds])
      );
      return true;
    } catch (error) {
      console.error("Could not save favorites to local storage.", error);
      favoritesStatus.textContent =
        `This favorite is active for this visit, but could not be saved for later.`;
      return false;
    }
  }

    function updateFavoriteButton(button) {
    const card = button.closest(".highlight-card");
    const mediaId = card?.dataset.mediaId;
  
    if (!mediaId) {
      console.error("A favorite button is missing its media card ID.");
      button.disabled = true;
      return;
    }
  
    const isFavorite = favoriteIds.has(mediaId);
  
    button.setAttribute("aria-pressed", `${isFavorite}`);
    button.textContent =
      `${isFavorite ? "Remove" : "Save"} ${isFavorite ? "from" : "to"} favorites`;
  }
  
  function toggleFavorite(event) {
    const button = event.currentTarget;
    const card = button.closest(".highlight-card");
    const mediaId = card?.dataset.mediaId;
  
    if (!mediaId) {
      console.error("Could not identify the media item for this favorite button.");
      favoritesStatus.textContent =
        `This item could not be added to favorites.`;
      return;
    }
  
    let isFavorite;
  
    if (favoriteIds.has(mediaId)) {
      favoriteIds.delete(mediaId);
      isFavorite = false;
    } else {
      favoriteIds.add(mediaId);
      isFavorite = true;
    }
  
    updateFavoriteButton(button);
  
    if (saveFavorites()) {
      favoritesStatus.textContent = isFavorite
        ? `Added ${card.dataset.title} to favorites.`
        : `Removed ${card.dataset.title} from favorites.`;
    }
  }
  function normalizeText(text) {
    return text.trim().toLowerCase();
  }
  function getSearchableText(card) {
    const title = card.dataset.title ?? "";
    const category = card.querySelector(".highlight-type")?.textContent ?? "";
    const description =
      card.querySelector(".highlight-description")?.textContent ?? "";
    const caption = card.querySelector("figcaption")?.textContent ?? "";

    return normalizeText(`${title} ${category} ${description} ${caption}`);
  }
  function updateMediaCards() {
    const searchTerm = normalizeText(searchInput.value)
    const selectedCategory = categorySelect.value;
    let visibleCount = 0;

  mediaCards.forEach((card)=>{
    // match and display based on the searchTerm and the category

    const cardText = getSearchableText(card);
    const cardCategory = card.dataset.category

    const matchesSearch = cardText.includes(searchTerm)
    const matchesCategory = selectedCategory === "all" || cardCategory === selectedCategory;
    const shouldShow = matchesSearch && matchesCategory

    const listItem = card.closest("li");


    if (listItem) {
      listItem.hidden = !shouldShow;
    }

    if (shouldShow) {
      visibleCount += 1;
    }

  });
  const itemLabel = visibleCount === 1 ? "media item" : "media items";
  resultsMessage.textContent = `${visibleCount} ${itemLabel} found.`;
  emptyMessage.hidden = visibleCount > 0;
    
  }

  searchInput.addEventListener("input", updateMediaCards);
  categorySelect.addEventListener("change", updateMediaCards);

  mediaForm.addEventListener("submit", (event) => {
    event.preventDefault();
    updateMediaCards();
  });

  mediaForm.addEventListener("reset", () => {
    requestAnimationFrame(updateMediaCards);
  });
    favoriteButtons.forEach((button) => {
    button.addEventListener("click", toggleFavorite);
    updateFavoriteButton(button);
  });
  updateMediaCards();
}
