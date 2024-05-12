import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

const searchForm = document.querySelector('.search-form');

const onFormSubmit = event => {
  event.preventDefault();
  const form = event.target;
  console.log(form.elements);
  console.log(form.elements.searchInput.value);
  fetchImages(form.elements.searchInput.value)
    .then(data => {
      renderImages(data.hits);
    })
    .catch(error => {
      console.log(error);
    });
};

searchForm.addEventListener('submit', onFormSubmit);

function showError() {
  if (fetchImages === '') {
    iziToast.show({
      title: 'Error',
      message: `Sorry, there are no images matching your search query. Please try again!`,
    });
  }
}

// if (submitButton === ' ') {
//   submitButton.setAttribute('disabled');
// }
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
