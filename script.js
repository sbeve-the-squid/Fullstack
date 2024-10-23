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