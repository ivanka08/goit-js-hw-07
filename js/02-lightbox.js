import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", createMurkup(galleryItems));
list.addEventListener("click", handleClick)

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        lightbox.prev();
    } else if (event.key === "ArrowRight") {
        lightbox.next();
    } else if (event.key === "Escape") {
        lightbox.close();
    }
});


function createMurkup(arr) {
    return arr.map(({ preview, original, description }) => `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `).join("")
}

function handleClick(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) {
        return;
    }
}


console.log(galleryItems);
