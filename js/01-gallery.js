import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryListEl = document.querySelector(".gallery");

console.log(galleryListEl);

// 1. Создать галерею

/* <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li>; */

const imageForGalleryList = galleryItems
  .map(
    (item) => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
  )
  .join(" ");

// console.log(imageForGalleryList);

galleryListEl.insertAdjacentHTML("beforeend", imageForGalleryList);

// 2.Реализация делегирования на ul.gallery и получение url большого изображения.

galleryListEl.addEventListener("click", selectedImage);

function selectedImage(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();

  console.log(event.target);
  onOpenModalImage();
}

function onOpenModalImage() {
  basicLightbox
    .create(
      `
  		<img  src="${event.target.dataset.source}">
  	`
    )
    .show();
}
