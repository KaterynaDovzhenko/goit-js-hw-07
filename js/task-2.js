const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const createGallery = (imgInfo) => {
  const galleryEl = document.createElement("li");
  galleryEl.classList.add("js-gallery-item");

  const galleryElImg = document.createElement("img");
  galleryElImg.src = imgInfo.url;
  galleryElImg.alt = imgInfo.alt;
  galleryElImg.style.width = "100%";
  galleryElImg.style.maxWidth = "300px";
  galleryElImg.style.height = "100%";

  galleryEl.append(galleryElImg);
  return galleryEl;
};

const galleryArr = images.map((img) => createGallery(img));
console.log(galleryArr);
const galleryList = document.querySelector(".gallery");
galleryList.style.listStyleType = "none";
galleryList.style.display = "flex";
galleryList.style.flexWrap = "wrap";
galleryList.style.gap = "10px";
galleryList.style.justifyContent = "center";
galleryList.append(...galleryArr);
