
const imagesList = [ 'stray.jpg', 'lol.jpg', 'bf3.jpg', 'cod.jpg', 'diablo.jpg' ];

const carouselElement = document.querySelector('div.carousel');
console.log(carouselElement);

let activeIndex = 4;

for ( let i = 0 ; i < imagesList.length ; i++ ){
    carouselElement.innerHTML +=
    `<div class="carousel-item">
        <img src="./img/${imagesList[i]}" alt="Carousel slide image">
    </div>`;
}

document.querySelectorAll('div.carousel-item')[activeIndex].classList.add('active');

const prevButton = document.querySelector('div.previous-button');
prevButton.addEventListener('click', function(){
    if (activeIndex == 0 ) {
        activeIndex = imagesList.length - 1;
    } else {
        activeIndex = activeIndex - 1;
    }

    document.querySelector('div.carousel-item.active').classList.remove('active');
    document.querySelectorAll('div.carousel-item')[activeIndex].classList.add('active');
});

const nextButton = document.querySelector('div.next-button');
nextButton.addEventListener('click', function(){
    if (activeIndex == imagesList.length - 1 ) {
        activeIndex = 0;
    } else {
        activeIndex = activeIndex + 1;
    }

    document.querySelector('div.carousel-item.active').classList.remove('active');
    document.querySelectorAll('div.carousel-item')[activeIndex].classList.add('active');
});
