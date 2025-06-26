const inputField = document.getElementById('input-address');
const outputField = document.getElementById('output-address');
const form = document.getElementById('converter');

function convertToBin(inputAddress) {
    return inputAddress.toString(2).padStart(9, '0');
}

form.addEventListener('input', () => {
    const inputAddress = parseInt(inputField.value);

    if ((inputAddress < 0) | (inputAddress > 512)) {
        throw "Out of DMX address range(1-512)!"
    }

    const outputAddress = convertToBin(inputAddress);
    outputField.value = outputAddress;
});