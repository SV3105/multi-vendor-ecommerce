// HERO BUTTON SCROLL
function scrollToCategories() {
  const categoriesSection = document.getElementById("categories");
  categoriesSection.scrollIntoView({ behavior: "smooth" });
}

// GIFT POPUP FUNCTIONS
function openGiftPopup() {
  document.getElementById("giftPopup").classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeGiftPopup() {
  document.getElementById("giftPopup").classList.remove("show");
  document.body.style.overflow = "auto";
}

function openGift() {
  document.getElementById("giftBox").style.display = "none";
  document.getElementById("popupText").innerText = "Pick a card to reveal your offer 🎉";
  document.getElementById("offerCards").style.display = "flex";
}

function chooseCard(card) {
  const offer = card.getAttribute("data-offer");

  // Hide offer cards
  document.getElementById("offerCards").style.display = "none";
  document.getElementById("popupText").style.display = "none";

  // Show result box
  const offerResult = document.getElementById("offerResult");
  const offerText = document.getElementById("offerText");

  offerText.innerText = offer;
  offerResult.style.display = "flex";
}
