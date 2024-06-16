const carouselContent = document.querySelector('.carousel-content');
const firstItem = carouselContent.children[0];

carouselContent.appendChild(firstItem.cloneNode(true));

carouselContent.addEventListener('animationiteration', () => {
  carouselContent.appendChild(carouselContent.children[0]);
  carouselContent.style.top = '0';
  carouselContent.style.animation = 'none';
  setTimeout(() => {
    carouselContent.style.animation = '';
  }, 10);
});
