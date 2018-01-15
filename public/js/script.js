document.addEventListener("DOMContentLoaded", () => {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.addEventListener("load", () => {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            const object = JSON.parse(xmlhttp.responseText);
            let result = "";
            for (tijd in object.openingstijden) {
                if (object.openingstijden.hasOwnProperty(tijd)) {
                    result += `<div>${tijd}: ${object.openingstijden[tijd]}</div>`;
                }
            }
            document.getElementById('openingstijden').innerHTML = result;
        }
    });
    const url = "http://www.dennisvanriet.nl/gemeentebalkendam/index.php?data=openingstijden";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
});

document.getElementById('submit').addEventListener('click', () => {
    const postcode = document.getElementById('postcode').value;
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.addEventListener("load", () => {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            const object = JSON.parse(xmlhttp.responseText);
            document.getElementById('output').innerHTML = "<h3>Volgende keer dat wij langkomen:</h3>" + object.verwerk;
        }
    });
    const url = `http://www.dennisvanriet.nl/gemeentebalkendam/index.php?data=afvalkalender&postcode=${postcode}`;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
});