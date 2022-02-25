// tady je místo pro náš program

function hodKostkou() {
    let vysledekHodu = Math.ceil(Math.random() * 6);

    if (vysledekHodu < 6) {
        document.getElementById('zprava').innerHTML = 'Padla ti ' + vysledekHodu + '. Zkus to znovu!';
        
        if (vysledekHodu == 1) {
            document.getElementById('kostka').src = '/obrazky/1.png';
        }

        else if (vysledekHodu == 2) {
            document.getElementById('kostka').src = '/obrazky/2.png';
        }

        else if (vysledekHodu == 3) {
            document.getElementById('kostka').src = '/obrazky/3.png';
        }

        else if (vysledekHodu == 4) {
            document.getElementById('kostka').src = '/obrazky/4.png';
        }

        else if (vysledekHodu == 5) {
            document.getElementById('kostka').src = '/obrazky/5.png';
        }
    }

    else if (vysledekHodu === 6) {
        document.getElementById('zprava').innerHTML = 'Padla ti ' + vysledekHodu + '. Gratulujeme k výhře!';
        document.getElementById('kostka').src = '/obrazky/6.png';
    }

    else {
        document.getElementById('zprava').innerHTML = 'Stala se nějaká chyba.';
    }
}
