export const renderImages = items => {
  const htmlString = items
    .map(
      image => `
    <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
            <img
            class="gallery-image"
            src="${image.webformatURL}"
            alt="${image.tags}"
            />
        </a>
    </li>

`
    )
    .join('');

  document.querySelector('.gallery').innerHTML = htmlString;
};
