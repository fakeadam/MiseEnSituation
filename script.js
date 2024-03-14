const scrollButton = document.getElementById('home');

function scrollDown(a, b) {
  window.scrollBy(a, b);
}

scrollButton.addEventListener('click', function() {
  scrollDown(0, 500);
});