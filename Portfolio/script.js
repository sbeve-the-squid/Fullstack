window.addEventListener('DOMContentLoaded', () => {
    const moles = document.querySelectorAll('.mole');
    moles.forEach(mole => {
        mole.classList.add('pop-up'); // Trigger pop-up animation
    });
});

const moles = document.querySelectorAll('.mole');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('pop-up'); // Trigger pop-up animation
                    } else {
                        entry.target.classList.remove('pop-up'); // Reset when out of view
                    }
                });
            });

            moles.forEach((mole) => {
                observer.observe(mole);
            });