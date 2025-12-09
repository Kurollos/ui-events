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

/* #The */
document.addEventListener('DOMContentLoaded', () => {
    // Selecteer de link
    let theLink = document.querySelector('a[href="#the"]');

    if (!theLink) return; // check dat het element bestaat

    // Sla de originele tekst op
    let originalText = theLink.textContent;

    // Mouseover → tekst veranderen
    theLink.addEventListener('mouseover', () => {
        theLink.textContent = "Muis over The!";
    });

    // Mouseout → tekst terug + rotate animatie
    theLink.addEventListener('mouseout', () => {
        theLink.textContent = originalText;
        theLink.classList.add('rotate');
        setTimeout(() => theLink.classList.remove('rotate'), 500);
    });
});


/* Flow */
document.addEventListener('DOMContentLoaded', () => {
    // Selecteer de link
    let flowLink = document.querySelector('a[href="#flow"]');

    if (!flowLink) return; // check dat het element bestaat

    // Mousedown → flip
    flowLink.addEventListener('mousedown', () => {
        flowLink.classList.add('flip');
    });

    // Mouseup → flip terug
    flowLink.addEventListener('mouseup', () => {
        flowLink.classList.remove('flip');
    });
});

/* User */
document.addEventListener('DOMContentLoaded', () => {
    // Selecteer de link via href
    let userLink = document.querySelector('a[href="#user"]');
    if (!userLink) return;

    // Luister naar keyup events op het document
    document.addEventListener('keyup', (event) => {
        const key = event.key.toLowerCase();

        switch(key) {
            case 'a':
                userLink.style.color = 'red';
                break;
            case 'b':
                userLink.style.color = 'blue';
                break;
            case 'c':
                userLink.style.color = 'green';
                break;
            default:
                userLink.style.color = 'black';
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    let interfaceLink = document.querySelector('a[href="#interface"]');
    if (!interfaceLink) return;

    // keydown → blaas op
    document.addEventListener('keydown', () => {
        interfaceLink.style.transform = 'scale(1.5)'; // 1.5x groter
    });

    // keyup → laat leeglopen
    document.addEventListener('keyup', () => {
        interfaceLink.style.transform = 'scale(1)'; // terug naar normaal
    });
});


/* Events */
document.addEventListener('DOMContentLoaded', () => {
    let eventsLink = document.querySelector('a[href="#events"]');
    if (!eventsLink) return;

    let fontSize = 16; // startgrootte in pixels
    eventsLink.style.fontSize = fontSize + "px";

    eventsLink.addEventListener('wheel', (event) => {
        event.preventDefault(); // voorkomt dat de pagina scrollt

        if (event.deltaY < 0) {
            // scroll omhoog → groter
            fontSize += 2;
        } else {
            // scroll omlaag → kleiner
            fontSize -= 2;
            if (fontSize < 8) fontSize = 8; // minimum grootte
        }

        eventsLink.style.fontSize = fontSize + "px";
    });
});


/* Interaction */
document.addEventListener('DOMContentLoaded', () => {
    const interactionLink = document.querySelector('a[href="#interaction"]');
    if (!interactionLink) return;

    interactionLink.addEventListener('mousemove', (e) => {
        const rect = interactionLink.getBoundingClientRect();
        const x = e.clientX - rect.left; // muispositie binnen de link
        const y = e.clientY - rect.top;

        interactionLink.style.background = `radial-gradient(circle at ${x}px ${y}px, #ff0, #333)`;
    });

    // optioneel: reset naar normale achtergrond als de muis de link verlaat
    interactionLink.addEventListener('mouseleave', () => {
        interactionLink.style.background = '#333';
    });
});
