export const renderImages = items => {
  const htmlString = items
    .map(
      image => `
    <li class="gallery-item">
        <a class="gallery-link" href="${image.webformatURL}">
            <img
            class="gallery-image"
            src="${image.webformatURL}"
            alt="cat"
            />
        </a>
    </li>

`
    )
    .join('');
  document.querySelector('.ul').innerHTML = htmlString;
};
