const tab = document.querySelectorAll('[data-tab="tab"] li');
const content = document.querySelectorAll('[data-tab="content"] div');

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
