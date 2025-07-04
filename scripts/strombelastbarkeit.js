const form  = document.getElementById('calculator');
const leiterquerschnittInput = document.getElementById('leiterquerschnitt');
const tempInput = document.getElementById('temperatur');
const adernzahlInput = document.getElementById('aderanzahl');
const wicklungInput = document.getElementById('wicklung');
const haufungInput = document.getElementById('haufung');

const outputField = document.getElementById('gesamtBelastbarkeit');

const einlagig = [1, 0.85, 0.79, 0.75, 0.73, 0.72, 0.72, 0.71, 0.7, 0.7];
const gehauft = [1, 0.8, 0.7, 0.65, 0.6, 0.57, 0.54, 0.52, 0.5, 0.48];

form.addEventListener('submit', (event) => {
    mode = document.querySelector('input[name="mode-selector"]:checked').value;

    grundBelastbarkeit = leiterquerschnittInput.value;
    tempFaktor = tempInput.value;
    aderFaktor = adernzahlInput.value;
    wicklungFaktor = wicklungInput.value;

    if (mode == "gebundelt") {
        haufungFaktor = gehauft[haufungInput.value -1];
    } else if (mode == "einlagig") {
        haufungFaktor = einlagig[haufungInput.value -1];
    }

    gesamtBelastbarkeit = grundBelastbarkeit * tempFaktor * aderFaktor * wicklungFaktor * haufungFaktor;
    
    outputField.value = gesamtBelastbarkeit.toFixed(2) + "A";

    event.preventDefault(); // dont send form to server
});