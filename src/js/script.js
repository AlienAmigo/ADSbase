function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === 'complete'
      : document.readyState !== 'loading'
  ) {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function () {
  const SubscribeForm = document.querySelector('#subscribe-form');
  const SubscribeInput = document.querySelector('#subscribe-email-input');
  SubscribeForm.addEventListener('submit', ev => {
    ev.preventDefault();
    SubscribeInput.value = '';
  });

  const DocBody = document.querySelector('body');
  const bodyOverflowValue = DocBody.style.overflow;

  const MainNav = document.querySelector('#main-nav');
  const MainNavBurgerBtn = document.querySelector('#main-nav-burger-btn');
  const MainNavWrapper = document.querySelector('.main-nav__wrapper');
  const MainNavLinks = document.querySelectorAll('.main-nav__link');
  const MainNavToggle = () => {
    if (MainNav.classList.contains('active')) {
      DocBody.style.overflow = bodyOverflowValue;
    } else {
      DocBody.style.overflow = 'hidden';
    }
    MainNav.classList.toggle('active');

  };

  MainNavLinks.forEach(item => {
    item.addEventListener('click', () => {
      MainNavToggle();
    });
  });

  MainNavWrapper.addEventListener('click', ev => ev.stopPropagation());

  MainNav.addEventListener('click', () => {
    MainNavToggle();
  });

  MainNavBurgerBtn.addEventListener('click', () => {
    MainNavToggle();
  });
});
