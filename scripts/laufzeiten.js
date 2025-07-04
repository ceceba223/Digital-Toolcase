const form  = document.getElementById('calculator');
const frequencyInput = document.getElementById('frequency');
const timeInput = document.getElementById('laufzeit');
const distanceInput = document.getElementById('distance');

const speedOfSound = 344;

function calcDistance(time) {
    distance = speedOfSound * time/1000;
    return distance.toFixed(2);
}

function calcTime(distance) {
    time = distance / speedOfSound;
    return time.toFixed(2);
}

form.addEventListener('submit', (event) => {
    time = timeInput.value;
    distance = distanceInput.value;

    if (time == "") {
        console.log("Calc Time");
        timeInput.value = calcTime(distance);
    } else if (distance == "") {
        console.log("Calc distance");
        distanceInput.value = calcDistance(time);
    }
    
    event.preventDefault(); // dont send form to server
});