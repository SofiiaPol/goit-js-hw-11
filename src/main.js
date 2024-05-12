import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

const ul = document.querySelector('.ul');
const submitButton = document.querySelector('.submit-button');

submitButton.addEventListener('click', event => {
  event.preventDefault();
  fetchImages('flower')
    .then(data => {
      renderImages(data.hits, ul);
    })
    .catch(error => {
      console.log(error);
    });
});

// fetchImages('flower')
//   .then(data => {
//     // console.log(data);
//     // return data;
//     const items = data.hits
//       .map(
//         image => `
//     <li class="gallery-item">
//         <a class="gallery-link" href="${image.webformatURL}">
//             <img
//             class="gallery-image"
//             src="${image.webformatURL}"
//             alt="cat"
//             />
//         </a>
//     </li>

// `
//       )
//       .join('');
//     ul.innerHTML = items;
//   })
//   .catch(error => {
//     console.log(error.message);
//   });
// console.log('data', data);

// import { fetchImages } from './pixabay-api.js';
// import { renderSearchForm } from './render-functions.js';
