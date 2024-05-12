export const renderImages = items => {
  const htmlString = items
    .map(
      image => `
    <li class="gallery-item">
        <a class="gallery-link" href="${image.webformatURL}">
            <img
            class="gallery-image"
            src="${image.webformatURL}"
            alt="${tags}"
            />
        </a>
    </li>

`
    )
    .join('');
  const lightbox = new SimpleLightbox('.ul a', {
    // options
  });

  document.querySelector('.ul').innerHTML = htmlString;
};
