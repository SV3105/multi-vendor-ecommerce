//Gift-popup
  setTimeout(() => {
    document.getElementById('giftPopup').classList.add('active');
  }, 2000);

  // Close popup
  function closeGiftPopup() {
    document.getElementById('giftPopup').classList.remove('active');
  }

  function openGift() {
  document.getElementById('giftBox').style.display = 'none';
  document.getElementById('popupText').style.display = 'none';
  document.getElementById('offerCards').style.display = 'flex';
}

function chooseCard(card) {
  const offer = card.getAttribute("data-offer");
  card.textContent = offer;

  document.querySelectorAll('.card').forEach(c => {
    if (c !== card) {
      c.style.opacity = 0.4;
      c.style.pointerEvents = "none";
    }
  });
}

