export const renderImages = (items, ulElement) => {
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
  ulElement.innerHTML = htmlString;
};
