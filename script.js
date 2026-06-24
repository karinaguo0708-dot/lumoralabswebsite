const year = document.querySelectorAll('[data-year]');
year.forEach(x => x.textContent = new Date().getFullYear());

const readBetweenDemoLink = document.querySelector('#readBetweenDemoLink');
if (readBetweenDemoLink) {
  readBetweenDemoLink.addEventListener('click', event => {
    event.preventDefault();
    window.location.href = readBetweenDemoLink.href;
  });
}
