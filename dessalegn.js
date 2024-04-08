
const typedText = document.querySelector('.typed-text');
const textArray = ['Web Designer', 'Web Developer', 'Front End Developer', 'Apps Designer', 'Apps Developer'];
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textIndex].length) {
        typedText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        charIndex = 0;
        textIndex = (textIndex + 1) % textArray.length;
        typedText.textContent = '';
        setTimeout(type, 1000); // 
    }
}

type(); 

document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.querySelector('.navbar-toggler').addEventListener('click', () => {
    document.querySelector('.navbar-collapse').classList.toggle('show');
});

const form = document.querySelector('form');
form.addEventListener('submit', e => {
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!fullname || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields.');
    }
});
