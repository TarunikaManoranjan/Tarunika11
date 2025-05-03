function showPopup(id) {
  const popup = document.getElementById(id);
  popup.classList.add('show');
  popup.querySelector('.popup-box').classList.add('animate-popup');
}

function closePopup(id) {
  const popup = document.getElementById(id);
  const box = popup.querySelector('.popup-box');
  
  // Animate out
  box.classList.remove('animate-popup');
  box.classList.add('fadeout');

  // Wait for animation to end before hiding
  setTimeout(() => {
    popup.classList.remove('show');
    box.classList.remove('fadeout');
  }, 400);
}
