const year = document.querySelector("#currentyear");
const modification = document.querySelector("#lastModified");
const today = new Date();
const modificationDate = document.lastModified;

year.innerHTML = `<span id="currentyear">&copy ${today.getFullYear()}</span>`;
modification.innerHTML = `<p id="lastModified">Last Modified: ${modificationDate}</p>`;

const windChillstr = document.querySelector("#windChill");
const tempstr = document.querySelector("#temp"); 
const windSpeedstr = document.querySelector("#windSpeed"); 

function calculateWindChill(temp, windSpeed) {
    return 13.12 + (0.6216 * temp) - (11.37 * (windSpeed ** 0.16)) + (0.3965 * temp * (windSpeed ** 0.16));
}

let tempVal = Number(tempstr.innerHTML);
let windSpeedVal = Number(windSpeedstr.innerHTML);
let windChillVal = 0;

if (tempVal <= 10 && windSpeedVal > 4.8) {
    windChillVal = calculateWindChill(tempVal, windSpeedVal);
} else {
    windChillVal = 0;
}

if (windChillVal != 0) {
    windChillstr.innerHTML = `<td id="#windChill">${String(windChillVal)}</td>`;
} else {
    windChillstr.innerHTML = `<td id="#windChill"> N/A </td>`;
}