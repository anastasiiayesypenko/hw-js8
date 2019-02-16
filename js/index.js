'use strict'

const galleryItems = [
  { preview: './img/preview-1.jpeg', fullview: './img/fullview-1.jpeg', alt: "image 1" },
  { preview: './img/preview-2.jpeg', fullview: './img/fullview-2.jpeg', alt: "image 2" },
  { preview: './img/preview-3.jpeg', fullview: './img/fullview-3.jpeg', alt: "image 3" },
  { preview: './img/preview-4.jpeg', fullview: './img/fullview-4.jpeg', alt: "image 4" },
  { preview: './img/preview-5.jpeg', fullview: './img/fullview-5.jpeg', alt: "image 5" },
  { preview: './img/preview-6.jpeg', fullview: './img/fullview-6.jpeg', alt: "image 6" },
];
// create fullview div into gallery
const gallery = document.querySelector('.js-image-gallery')
const fullviewDiv = document.createElement('div');
fullviewDiv.classList.add('fullview');
// add fullview Image into fullview div
const fullviewImage = document.createElement('img');
fullviewImage.classList.add('active-image');
let activeSrc = galleryItems.map((el) => el.fullview);
fullviewImage.setAttribute('src', activeSrc[0]);


//create preview list and images
const ulOfPreviews = document.createElement('ul');
ulOfPreviews.classList.add('preview');
for (let item of galleryItems) {
  let previewImageLi = document.createElement('li');
  let previewImage = document.createElement('img');
  previewImage.src = item.preview;
  previewImage.dataset.fullview = item.fullview;
  previewImage.setAttribute('alt', item.alt);
  previewImage.classList.add('preview__image')
  ulOfPreviews.append(previewImageLi);
  previewImageLi.append(previewImage);
}

//append divs
gallery.append(fullviewDiv, ulOfPreviews);
fullviewDiv.appendChild(fullviewImage);
let firstPreviewImage = document.querySelector('.preview__image');
firstPreviewImage.classList.add('chosen-preview-image');

// onclick function
function chooseFullview(event) {
  let target = event.target;
  console.log(target);
  if (target.nodeName === 'IMG') {
    fullviewImage.src = target.dataset.fullview;
    setChosenImage(target);
  }
};
// highlight chosen preview
function setChosenImage(nextChosenImage) {
  const currentChosenImage = document.querySelector('img.chosen-preview-image');
  if (currentChosenImage) {
    currentChosenImage.classList.remove('chosen-preview-image');
  }

  nextChosenImage.classList.add('chosen-preview-image');
}


ulOfPreviews.addEventListener('click', chooseFullview);





// additional task
  
class Gallery {
  constructor({items, parentNode, defaultActiveItem}) {
    this.items = items;
    this.parentNode = parentNode;
    this.defaultActiveItem = defaultActiveItem;
  }
  //create fullview div into gallery
  createGallery() {
    const gallery = this.parentNode;
    const fullviewDiv = document.createElement('div');
    fullviewDiv.classList.add('fullview');
    // add fullview Image into fullview div
    const fullviewImage = document.createElement('img');
    fullviewImage.classList.add('active-image');
    let activeSrc = this.items.map((el) => el.fullview);
    fullviewImage.setAttribute('src', activeSrc[this.defaultActiveItem]);
    //create preview list and images
    const ulOfPreviews = document.createElement('ul');
    ulOfPreviews.classList.add('preview'); 
    for (let item of this.items) {
      let previewImageLi = document.createElement('li');
      let previewImage = document.createElement('img');
      previewImage.src = item.preview;
      previewImage.dataset.fullview = item.fullview;
      previewImage.setAttribute('alt', item.alt);
      previewImage.classList.add('constructor-preview__image')
      ulOfPreviews.append(previewImageLi);
      previewImageLi.append(previewImage);
      if (item === this.items[this.defaultActiveItem]) {
        previewImage.classList.add('constructor-chosen-preview-image');
      }
    }

    //append divs
    gallery.append(fullviewDiv, ulOfPreviews);
    fullviewDiv.appendChild(fullviewImage);

    // onclick function
    function chooseFullview(event) {
      let target = event.target;
      console.log(event.currentTarget);
      if (target.nodeName === 'IMG') {
        fullviewImage.src = target.dataset.fullview;
        setChosenImage(target);
      }
    };

    // highlight chosen preview
    function setChosenImage(nextChosenImage) {
      const currentChosenImages = document.querySelectorAll('img.constructor-chosen-preview-image');
      for(let item of currentChosenImages) {
          item.classList.remove('constructor-chosen-preview-image');
      }
      nextChosenImage.classList.add('constructor-chosen-preview-image');
    }


    ulOfPreviews.addEventListener('click', chooseFullview);
  }
};

const gallery1 = new Gallery({
  items: galleryItems,
  parentNode: document.querySelector('.constructor'),
  defaultActiveItem: 1
});


const gallery2 = new Gallery({
  items: galleryItems,
  parentNode: document.querySelector('.constructor'),
  defaultActiveItem: 2
});

console.log(gallery1);
gallery1.createGallery();
gallery2.createGallery();