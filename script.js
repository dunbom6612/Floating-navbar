const navBarLinkItems = document.querySelectorAll('.navbar__item a');

const resetActive = () => {
  navBarLinkItems.forEach((item) => {
    item.classList.remove('active');
  });
};

navBarLinkItems.forEach((item) => {
  item.addEventListener('click', () => {
    resetActive();
    item.classList.add('active');
  });
});

// handle hightlight navbar on scroll event

const colors = document.querySelectorAll('.color');

const handleOnscroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    console.log(entry);
    const idSection = entry.target.id;
    console.log('entry.target', entry.target.id);
    hightLightNavBar(idSection);
  });
};
const navBarWrapper = document.querySelector('.app_navbar');

const hightLightNavBar = (idSection) => {

  const navLinks = document.querySelectorAll('.navbar__item--link');
  navLinks.forEach((ele) => ele.classList.remove('active'));
  const navbarLink = document.querySelector(`a[href='#${idSection}']`);
  navbarLink.classList.add('active');
};

let options = {
  root: null,
  rootMargin: '100px',
  threshold: 0.5
};

const observer = new IntersectionObserver(handleOnscroll, options);

colors.forEach((item) => {
  // console.log('item', item);
  observer.observe(item);
});
