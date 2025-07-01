const form  = document.getElementById('calculator');
const trussLengthInput = document.getElementById('truss-length');
const fixtureNumInput = document.getElementById('fixture-amount');
const insetLengthInput = document.getElementById('inset-length');
const outputField = document.getElementById('distance-mid-mid');

// Show Hide div
const firstRadio = document.getElementById('on-end');
const secondRadio = document.getElementById('inset-end');
const divContent = document.getElementById('extra-setting');

function calcDistanceMM(trussLength, fixAmount, inset) {
    distanceMM = (trussLength - (2 * inset)) / (fixAmount - 1);
    return distanceMM.toFixed(2);
}


form.addEventListener('submit', (event) => {
    // handle the form data
    mode = document.querySelector('input[name="mode-selector"]:checked').value;

    if (mode == "on-end") {
        // If mode on end
        distanceMM = calcDistanceMM(trussLengthInput.value, fixtureNumInput.value, 0);
    } else if (mode == "inset-end") {
        // If mode inset end
        distanceMM = calcDistanceMM(trussLengthInput.value, fixtureNumInput.value, insetLengthInput.value);
    } else {
        throw "No mode selected!"
    }
    outputField.value = distanceMM;
    
    event.preventDefault(); // dont send form to server
});

function showHideDiv() {
   if(firstRadio.checked){
      divContent.classList.add('hidden-div');
   }
   else if(secondRadio.checked) {
      divContent.classList.remove('hidden-div');
   }
}