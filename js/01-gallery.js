import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
galleryList.addEventListener('click', openModalImg);

function createGallery(items) {
	return items
		.map(({ preview, original, description }) => {
			return `
     <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
       </a>
     </li >
     `;
		})
		.join('');
}

function openModalImg(evt) {
	if (!evt.target.classList.contains('gallery__image')) {
		return;
	}

	const originalImageSrc = evt.target.dataset.source;

	const instance = basicLightbox.create(`
		<img src="${originalImageSrc}" width="800" height="600">
	`);

	instance.show();
}

console.log(galleryItems);
