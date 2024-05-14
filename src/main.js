import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import simpleLightbox from 'simplelightbox';

const searchForm = document.querySelector('.search-form');
const loader = document.querySelector('.loader');

loader.style.display = 'none';
// searchForm.addEventListener('submit', onSearch);

let lightbox;
const onFormSubmit = event => {
  event.preventDefault();
  const form = event.target;
  console.log(form.elements);
  console.log(form.elements.searchInput.value);
  fetchImages(form.elements.searchInput.value)
    .then(data => {
      loader.style.display = 'none';
      if (data.totalHits === 0) {
        showMessage(
          `Sorry, there are no images matching your search query. Please try again!`
        );
      } else {
        renderImages(data.hits);
        lightbox = new SimpleLightbox('.gallery a');
      }
    })
    .catch(error => {
      loader.style.display = 'none';
      showError(error.message);
    });
};

searchForm.addEventListener('submit', onFormSubmit);

function showError(errorMessage) {
  iziToast.show({
    title: 'Error',
    message: errorMessage,
    messageColor: 'white',
    backgroundColor: 'tomato',
  });
}

function showMessage(message) {
  iziToast.show({
    title: 'Message',
    message: message,
    messageColor: 'white',
    backgroundColor: 'teal',
  });
}

function onSearch(event) {
  event.preventDefault();
  // htmlString.innerHTML = '';
  loader.style.display = 'block';
}

// function showLoader() {
//   document.getElementById('loader').style.display = 'block';
// }

// function hideLoader() {
//   document.getElementById('loader').style.display = 'none';
// }

// `Sorry, there are no images matching your search query. Please try again!`;

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
