function enterSite() {
  const splash = document.getElementById('splash');
  const main = document.getElementById('main');
  splash.style.opacity = 0;
  setTimeout(() => {
    splash.style.display = 'none';
    main.style.display = 'block';
  }, 1000);
}