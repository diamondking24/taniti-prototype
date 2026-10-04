function toggleMenu() {
  document.querySelector('nav').classList.toggle('open');
}

function filterFamily(checkbox) {
  document.querySelectorAll('[data-family]').forEach(function (card) {
    var isFamily = card.getAttribute('data-family') === 'yes';
    card.style.display = checkbox.checked && !isFamily ? 'none' : '';
  });
}

function submitBooking(event) {
  event.preventDefault();
  window.location.href = 'confirmation.html';
}
