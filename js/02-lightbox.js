import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

function createGallery(items) {
	return items
		.map(({ preview, original, description }) => {
			return `
            <li class="gallery__item">
             <a class="gallery__link" href="${original}"  >
              <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
             </a>
            </li>
            `;
		})
		.join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
	captions: true,
	captionSelector: 'img',
	captionType: 'attr',
	captionsData: alt,
	captionDelay: 250,
	captionPosition: 'bottom',
});

console.log(galleryItems);
