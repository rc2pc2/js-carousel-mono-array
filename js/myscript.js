
// la lista delle immagini a disposizione del nostro carosello
const imagesList = [ 'stray.jpg', 'lol.jpg', 'bf3.jpg', 'cod.jpg', 'diablo.jpg' ];

// seleziono l'elemento all'interno del quale inserirò le mie immagini
const carouselElement = document.querySelector('div.carousel');

// inizializzo un indice che terrà traccia della "slide" in cui mi trovo
let activeIndex = 4;

// itero per ogni immagine nella mia  lista delle immagini e la inserisco in display none, quindi invisibile, nel nostro contenitore del carosello
for ( let i = 0 ; i < imagesList.length ; i++ ){
    carouselElement.innerHTML +=
    `<div class="carousel-item">
        <img src="./img/${imagesList[i]}" alt="Carousel slide image">
    </div>`;
}

// prendo la slide con l'indice che inizialmente ho scelto essere visibile e la rendo visibile aggiungendole la classe "active"
document.querySelectorAll('div.carousel-item')[activeIndex].classList.add('active');

// prendo il bottone per andare alla slide precedente, gli aggiungo un ascoltatore di eventi che eseguirà una funzione anonima ogni volta che questo riceverà un click
const prevButton = document.querySelector('div.previous-button');
prevButton.addEventListener('click', function(){

    // controllo di essere al primo elemento, se lo sono
    if (activeIndex == 0 ) {
        // torno all'ultimo
        activeIndex = imagesList.length - 1;
    } else {
        // altrimenti vado alla slide immediatamente precedente
        activeIndex = activeIndex - 1;
    }

    // rimuovo la classe active dalla vecchia slide visibile
    document.querySelector('div.carousel-item.active').classList.remove('active');

    // la aggiungo a quella che ora voglio sia visualizzata
    document.querySelectorAll('div.carousel-item')[activeIndex].classList.add('active');
});


// prendo il bottone per andare alla slide successiva, gli aggiungo un ascoltatore di eventi che eseguirà una funzione anonima ogni volta che questo riceverà un click
const nextButton = document.querySelector('div.next-button');
nextButton.addEventListener('click', function(){

    // controllo di essere all'ultimo elemento, se lo sono
    if (activeIndex == imagesList.length - 1 ) {
        // torno all'inizio
        activeIndex = 0;
    } else {
        // altrimenti vado alla slide immediatamente successiva
        activeIndex = activeIndex + 1;
    }

  // rimuovo la classe active dalla vecchia slide visibile
    document.querySelector('div.carousel-item.active').classList.remove('active');
      // la aggiungo a quella che ora voglio sia visualizzata
    document.querySelectorAll('div.carousel-item')[activeIndex].classList.add('active');
});
