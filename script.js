window.addEventListener('scroll', () => {
    if (window.scrollTop()) {
        document.getElementsByTagName('header')[0].classList.add('nav-show');
    } else {
        document.getElementsByTagName('header')[0].classList.remove('nav-show');
    }
});

const navslide = () => {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.nav-bar');
    const navlink = document.querySelectorAll('.nav-bar li');

    hamburger.onclick = () => {
        navbar.classList.toggle('nav-active');
        navlink.forEach((l, i) => {
            if (l.style.animation) {
                l.style.animation = '';
            } else {
                l.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        });

        hamburger.classList.toggle('toggle');
    }
}

window.onload = () => navslide();