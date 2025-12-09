/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1: selecteer het Design linkje, en sla deze op in een variabele
let designLink = document.querySelector('a[href="#design"]')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
designLink.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  designLink.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
// Dit is trouwens geen UIEvent, maar een AnimationEvent
designLink.addEventListener('animationend', jumpHandler)




// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een scale animatie als je op de Frontend link klikt

// Stap 1: querySelector
// let scaleLink = document.querySelector...

// Stap 2: addEventListener
// scaleLink.addEventListener...

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// scaleLink.classList.toggle...

/* Frontend */
let scaleLink = document.querySelector('a[href="#frontend"]')
console.log(scaleLink)


scaleLink.addEventListener('click',function(){
  scaleLink.classList.toggle('slide-in')
  console.log()
})

/* #and */

let translateLink = document.querySelector('a[href="#and"]')

translateLink.addEventListener('click',function(){
  translateLink.classList.toggle('moved')
  console.log(translateLink)
})

/* #development */

let animationLink = document.querySelector('a[href="#development"]')

animationLink.addEventListener('dblclick', function(){

animationLink.classList.add('shake');


 setTimeout(() => {
        animationLink.classList.remove('shake');
    }, 500);
});

/* #Sprint 5 */

// 1. Zoek het element
let sprint5Link = document.querySelector('a[href="#sprint-5"]');


// 2. Mouseover → tekst veranderen
sprint5Link.addEventListener('mouseover', () => {
    sprint5Link.textContent = "Muis over #sprint-5!";
});


// 3. Mouseout → rotate animatie
sprint5Link.addEventListener('mouseout', () => {
    sprint5Link.classList.add('rotate');
    setTimeout(() => sprint5Link.classList.remove('rotate'), 500);
    sprint5Link.textContent = "#Sprint-5"; // terugzetten originele tekst
});


// 4. Mousedown → flip
sprint5Link.addEventListener('mousedown', () => sprint5Link.classList.add('flip'));
// Mouseup → terug
sprint5Link.addEventListener('mouseup', () => sprint5Link.classList.remove('flip'));

/* #fix */
let fixLink = document.querySelector('a[href="#fix"]');
let originalText = fixLink.textContent;

fixLink.addEventListener('mouseover', () => {
    fixLink.textContent = "Muis over Fix!";
});

fixLink.addEventListener('mouseout', () => {
    fixLink.textContent = originalText;
});





