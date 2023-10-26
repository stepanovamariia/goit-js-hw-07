import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);
let instance = null;

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

	instance = basicLightbox.create(
		`<img src="${originalImageSrc}" width="800" height="600">`
	);

	instance.show();

	document.addEventListener('keydown', closeModalOnEsc);

	onClose: (instance) => {
		document.removeEventListener('keydown', closeModalOnEsc);
	};
}

function closeModalOnEsc(event) {
	if (event.key === 'Escape') {
		instance.close();
	}
}

console.log(galleryItems);
