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
let lightbox = new SimpleLightbox('.gallery a');

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
        lightbox.refresh();
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
  loader.style.display = 'block';
}
