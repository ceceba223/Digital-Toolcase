const inputField = document.getElementById('input-address');
const outputField = document.getElementById('output-address');
const form = document.getElementById('converter');

const switch1 = document.getElementById('switch-1');
const switch2 = document.getElementById('switch-2');
const switch3 = document.getElementById('switch-3');
const switch4 = document.getElementById('switch-4');
const switch5 = document.getElementById('switch-5');
const switch6 = document.getElementById('switch-6');
const switch7 = document.getElementById('switch-7');
const switch8 = document.getElementById('switch-8');
const switch9 = document.getElementById('switch-9');
const switches = [switch1, switch2, switch3, switch4, switch5, switch6, switch7, switch8, switch9];


function convertToBin(inputAddress) {
    return inputAddress.toString(2).padStart(9, '0');
}

function setSwitches(binAddress) {
    for (let i = 0; i < 9; i += 1) {
        currentSwitch = switches[i];
        console.log(i);
        if (binAddress[9-i-1] == 1){
            //console.log(binAddress[9-i])
            currentSwitch.style.top = '31%';
        } else {
            //console.log(binAddress[9-i])
            currentSwitch.style.top = '57%';
        }
    }
}

form.addEventListener('input', () => {
    const inputAddress = parseInt(inputField.value);

    if ((inputAddress < 0) | (inputAddress > 512)) {
        throw "Out of DMX address range(1-512)!"
    }

    const outputAddress = convertToBin(inputAddress);
    setSwitches(outputAddress);
    //outputField.value = outputAddress;
});