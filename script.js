const reveals = document.querySelectorAll('.reveal');
const sections = document.querySelectorAll('section');
const dots = document.querySelectorAll('.dot');


const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.88;

  reveals.forEach((item) => {
    const top = item.getBoundingClientRect().top;

    if (top < triggerBottom) {
      item.classList.add('visible');
    }
  });
};


const updateActiveDot = () => {
  let currentId = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 180;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentId = section.getAttribute('id');
    }
  });

  dots.forEach((dot) => {
    dot.classList.remove('active');

    if (dot.getAttribute('href') === `#${currentId}`) {
      dot.classList.add('active');
    }
  });
};

window.addEventListener('scroll', () => {
  revealOnScroll();
  updateActiveDot();
});

window.addEventListener('load', () => {
  revealOnScroll();
  updateActiveDot();
});
