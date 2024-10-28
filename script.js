function generatePastelColor() {
    const hue = Math.floor(Math.random() * 360); 
    const saturation = 70 + Math.random() * 10; 
    const lightness = 80 + Math.random() * 10; 
    return { hue, saturation, lightness };
}

function interpolateColor(color1, color2, factor) {
    const hue = color1.hue + (color2.hue - color1.hue) * factor;
    const saturation = color1.saturation + (color2.saturation - color1.saturation) * factor;
    const lightness = color1.lightness + (color2.lightness - color1.lightness) * factor;
    return { hue, saturation, lightness };
}

function applyColor({ hue, saturation, lightness }) {
    document.body.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

let currentColor = generatePastelColor();
let nextColor = generatePastelColor();
let transitionDuration = 1000; 
let startTime = performance.now();

function updateBackgroundColor(timestamp) {
    const elapsed = timestamp - startTime;
    const factor = Math.min(elapsed / transitionDuration, 1); 

    const interpolatedColor = interpolateColor(currentColor, nextColor, factor);
    applyColor(interpolatedColor);

    if (factor < 1) {
        requestAnimationFrame(updateBackgroundColor); 
    } else {
        currentColor = nextColor;
        nextColor = generatePastelColor();
        startTime = performance.now();
        requestAnimationFrame(updateBackgroundColor);
    }
}

requestAnimationFrame(updateBackgroundColor);

const clouds = document.querySelectorAll('.cloud');

// Function to add a delay before each cloud appears
clouds.forEach((cloud, index) => {
    setTimeout(() => {
        cloud.style.opacity = '1'; // Make the cloud visible
    }, index * 3000); // 3 seconds delay for each subsequent cloud
});

/* 
window.addEventListener('DOMContentLoaded', () => {
    const moles = document.querySelectorAll('.mole');
    moles.forEach(mole => {
        mole.classList.add('pop-up'); 
    });
});

const moles = document.querySelectorAll('.mole');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('pop-up'); 
                    } else {
                        entry.target.classList.remove('pop-up'); 
                    }
                });
            });

            moles.forEach((mole) => {
                observer.observe(mole);
            });
*/