import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
list.addEventListener("click", handleClick)

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `).join("")
}

function handleClick(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) {
        return;
    }

const clickedItem = event.target.closest(".gallery__item"); 
  const original = clickedItem.querySelector("img").getAttribute("data-source");
  const description = clickedItem.querySelector("img").getAttribute("alt");

    const instance = basicLightbox.create(`
    <div class="modal">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${original}"
      alt="${description}"
    />
  </a>
    </div>
    `,  {
      closable: false,
      
    onShow: (instance) => {
      document.addEventListener("keydown", handleEscapeKey);
      },
    
    onClose: (instance) => {
      document.removeEventListener("keydown", handleEscapeKey);
    },
  });
  
  instance.show();

  function handleEscapeKey(e) {
    if (e.key === "Escape") {
      instance.close();
    }
    }
  
}
  

console.log(galleryItems);
