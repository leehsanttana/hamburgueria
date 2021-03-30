const tab = document.querySelectorAll('[data-tab="tab"] li');
const content = document.querySelectorAll('[data-tab="content"] div');
const buttonBar = document.querySelector('.btn-menu');
const nav = document.querySelector('.nav');

function showMenu() {
  nav.classList.toggle('show-menu');
  buttonBar.classList.toggle('active');
}

function activeShowMenu() {
  buttonBar.addEventListener('click', showMenu);
}

activeShowMenu();

function scrollInternalLink() {
  const links = document.querySelectorAll('.nav a[href^="#"]');

  function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
  }

  function scrollToPosition(to) {
    window.scroll({
      top: to,
      behavior: 'smooth',
    });
  }

  function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.currentTarget) - 60;
    scrollToPosition(to);
    nav.classList.remove('show-menu');
  }

  links.forEach((links, i) => {
    links.addEventListener('click', scrollToIdOnClick);
  });
}

scrollInternalLink();

function menuTabs() {
  tab[0].classList.add('active');
  content[0].classList.add('active');

  function activeLink(i) {
    tab.forEach((li) => {
      li.classList.remove('active');
    });
    content.forEach((section) => {
      section.classList.remove('active');
    });

    tab[i].classList.add('active');
    content[i].classList.add('active');

    console.log('teste');
  }

  tab.forEach((li, i) => {
    li.addEventListener('click', () => {
      activeLink(i);
    });
  });
}

menuTabs();
