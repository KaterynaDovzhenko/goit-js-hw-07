import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

const galleryImg = galleryItems
    .map(({ preview, description, original }) =>
        `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
).join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryImg);

const lightbox = new SimpleLightbox('.gallery a', { captionsData:"alt",captionDelay: 250, captionPosition: "bottom",});