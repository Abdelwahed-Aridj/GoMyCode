const images = ['blue_dragon', 'dark_magician', 'kuriboh', 'red_dragon'];
const input = document.querySelector('.search');
const button = document.querySelector('.submit');
const image = document.querySelector('.img');

const generateImages = () => {
  images.filter((img) => {
    if (input.value.toLowerCase().trim() === img) {
      image.src = `images/${img}.png`;
    }
  });
  input.value = '';
};

button.addEventListener('click', generateImages);
