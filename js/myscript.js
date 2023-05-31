const imagesList = [
    {
        image: 'img/bf3.jpg',
        title: 'Battlefield 3',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/cod.jpg',
        title: 'Call Of Duty',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/diablo.jpg',
        title: 'Diablo',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image:'img/stray.jpg',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/lol.jpg',
        title: "League of Legends",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carouselElement = document.querySelector('div.carousel');
const thumbnailslement = document.querySelector('div.thumbnails');

let activeIndex = 3;
let hasCarouselStarted = false;

// ? cerco l'elemento su cui iterare => imagesList
// ? cerco di capire quante variabili mi servono => imageElement
imagesList.forEach(( imageElement, index ) => {
    carouselElement.innerHTML +=
    `<div class="carousel-item">
        <img src="${imageElement.image}" alt="Carousel slide image of ${imageElement.title}">
        <div class="item-info">
            <h4 class="item-title">
                ${imageElement.title}
            </h4>
            <p class="item-description">
                ${imageElement.text}
            </p>
        </div>
    </div>`;


    const thumbnailItemElement = document.createElement('div');
    thumbnailItemElement.classList.add('thumbnail-item');
    thumbnailItemElement.innerHTML = `<img src="${imageElement.image}" alt="Carousel thumnbail image of ${imageElement.title}"></img>`;

    thumbnailItemElement.addEventListener('click',  () => {
        goToSlide(index);
        activeIndex = index;
    })


    thumbnailslement.appendChild(thumbnailItemElement);
});

goToSlide(activeIndex);
hasCarouselStarted = true;

const prevButton = document.querySelector('div.previous-button');
prevButton.addEventListener('click', function(){
    if (activeIndex == 0 ) {
        activeIndex = imagesList.length - 1;
    } else {
        activeIndex = activeIndex - 1;
    }

    goToSlide(activeIndex);

});

const nextButton = document.querySelector('div.next-button');
nextButton.addEventListener('click', function(){
    if (activeIndex == imagesList.length - 1 ) {
        activeIndex = 0;
    } else {
        activeIndex = activeIndex + 1;
    }

    goToSlide(activeIndex);
});


function goToSlide(slideIndex){

    if ( hasCarouselStarted )
        document.querySelector('div.carousel-item.active').classList.remove('active');

    document.querySelectorAll('div.carousel-item')[slideIndex].classList.add('active');

    if ( hasCarouselStarted )
        document.querySelector('div.thumbnail-item.active').classList.remove('active');

    document.querySelectorAll('div.thumbnail-item')[slideIndex].classList.add('active');
}