const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('ul#gallery');

// спосіб 1
// const elements = images.map(option => {
//   const imageEl = document.createElement('img');
//   imageEl.src = option.url;
//   imageEl.alt = option.alt;
//   const galleryItemEl = document.createElement('li');
//   galleryItemEl.classList.add('gallery__item');
//   galleryItemEl.append(imageEl);
//   return galleryItemEl;
// });
// galleryEl.append(...elements);

// спосіб 2 вірний
const galleryItemMaketUp = image => {
  return `<li class='gallery__item'>
    <img src='${image.url}' alt='${image.alt}'>
  </li>`;
};
const galleryItemMaket = images.map(galleryItemMaketUp).join('');

galleryEl.insertAdjacentHTML('afterbegin', galleryItemMaket);
