const sections = document.querySelectorAll('.hero-portfolio__section');
const titles = document.querySelectorAll('.js-title');
const cursor = document.querySelector('.hero-portfolio__cursor');
const navBrand = document.querySelector('.hero-portfolio__nav-brand');
const footer = document.querySelector('.hero-portfolio__footer');
let currentIndex = 0;
let isAnimating = false;
let cursorTimeout;

sections.forEach((section, i) => {
    section.style.transform = `translateY(${i * 100}%)`;
});

function updateDisplay(index) {
    titles.forEach((title, i) => {
        if (i === index) {
            title.classList.add('is-active');
        } else {
            title.classList.remove('is-active');
        }
    });
    sections.forEach((section, i) => {
        section.classList.toggle('hero-portfolio__section--active', i === index);
    });
}

function moveToIndex(index) {
    if (isAnimating || index < 0 || index >= sections.length) return;
    
    isAnimating = true;
    currentIndex = index;
    sections.forEach((section, i) => {
        section.style.transition = 'transform 1.6s cubic-bezier(0.7, 0, 0.2, 1)';
        section.style.transform = `translateY(${(i - currentIndex) * 100}%)`;
    });
    updateDisplay(currentIndex);
    setTimeout(() => {
        isAnimating = false;
    }, 1600);
}

function hideCursor() {
    cursor.classList.add('is-hidden');
}

function showCursor() {
    cursor.classList.remove('is-hidden');
    clearTimeout(cursorTimeout);
    cursorTimeout = setTimeout(hideCursor, 1500);
}

window.addEventListener('wheel', (e) => {
    if (isAnimating) return;
    if (e.deltaY > 0) {
        moveToIndex(currentIndex + 1);
    } else {
        moveToIndex(currentIndex - 1);
    }
}, { passive: true });

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    showCursor();
});

titles.forEach((title) => {
    title.addEventListener('click', () => {
        const index = parseInt(title.getAttribute('data-index'));
        moveToIndex(index);
    });
});

navBrand.addEventListener('mouseenter', () => {
    footer.style.opacity = '1';
});

navBrand.addEventListener('mouseleave', () => {
    footer.style.opacity = '0.15';
});

updateDisplay(0);
showCursor();

const contactTrigger = document.querySelector('.js-contact-trigger');
const contactPanel = document.querySelector('.hero-portfolio__contact-panel');
const contactClose = document.querySelector('.hero-portfolio__contact-close');

contactTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    contactPanel.classList.add('is-open');
});

contactClose.addEventListener('click', () => {
    contactPanel.classList.remove('is-open');
});

contactPanel.addEventListener('click', (e) => {
    if (e.target === contactPanel) {
        contactPanel.classList.remove('is-open');
    }
});

const aboutTrigger = document.querySelector('.js-about-trigger');
const aboutPanel = document.querySelector('.hero-portfolio__about-panel');
const aboutClose = document.querySelector('.hero-portfolio__about-close');

aboutTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    aboutPanel.classList.add('is-open');
});

aboutClose.addEventListener('click', () => {
    aboutPanel.classList.remove('is-open');
});

aboutPanel.addEventListener('click', (e) => {
    if (e.target === aboutPanel) {
        aboutPanel.classList.remove('is-open');
    }
});
fsdfsfds.jpg
image1.png
img2.jpg
img3.png
img22.jpg
img4.jpg

