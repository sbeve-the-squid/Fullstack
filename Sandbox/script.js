const darkColors = [
    "#0B0C10", // Dark Slate Grey
    "#1C1C1C", // Very Dark Grey
    "#2C3E50", // Midnight Blue
    "#000000", // Black
    "#3D3D3D", // Dark Charcoal
    "#4B0082", // Indigo
    "#2F4F4F", // Dark Slate
    "#191970", // Midnight Blue
    "#1B1B1B", // Eerie Black
    "#343A40", // Dark Grayish Blue
    "#2E2E2E", // Jet Black
];

const body = document.querySelector('body');
const hexText = document.querySelector('p');
const button = document.querySelector('button');

let colorIndex = 0;
function changeColors(){
    body.style.backgroundColor = darkColors[colorIndex];  
    colorIndex++;
    hexText.innerHTML = "Hex Cod: " + darkColors[colorIndex];
    if (colorIndex >= darkColors.length){
        colorIndex = 0;
    }
}

button.onclick = changeColors;

console.log(darkColors);