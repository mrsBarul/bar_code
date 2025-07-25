const linkMenuItems = document.querySelectorAll('.linkMenuItem');
const underLines = document.querySelectorAll('.underLine');
const playPauseButton = document.querySelector('.playPauseButton');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const audio = document.querySelector('.audio');
const click = document.querySelector('.click');
const worksImage =document.querySelectorAll('.worksImage');
const menuToggleContainer = document.querySelector('.menuToggleContainer');
const menu = document.querySelector('nav');
const buttonLanguage = document.querySelector('.buttonLanguage')

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        play.style.display = 'none';
        pause.style.display = 'inline';
    } else {
        audio.pause();
        pause.style.display = 'none';
        play.style.display = 'inline';
    }
    });

    audio.addEventListener('ended', () => {
    pause.style.display = 'none';
    play.style.display = 'inline';
});

linkMenuItems.forEach((linkMenuItem, index) => {
    const underLine = underLines[index];

    if (linkMenuItem && underLine) {
        linkMenuItem.addEventListener("mouseenter", () => {
            click.play();
            underLine.style.width = "100%";
        });

        linkMenuItem.addEventListener("mouseleave", () => {
            underLine.style.width = "0";
        });
    }
});

for (let i = 0; i < worksImage.length; i++) {
    worksImage[i].addEventListener('mouseover', function() {
        click.play();
    })
}

let menuOpen = true;
const screenWidthThreshold = 550;


function updateMenuState() {
    if (window.innerWidth <= screenWidthThreshold) {
        menu.style.display = menuOpen ? 'block' : 'none'; 
        menuToggleContainer.style.display = menuOpen ? 'none' : 'block';
    } else {
        menu.style.opacity = 'block';
    }
}

updateMenuState();

menuToggleContainer.addEventListener('click', () => {
    menuOpen = !menuOpen;
    updateMenuState();
});


window.addEventListener('scroll', () => {
    if (window.innerWidth <= screenWidthThreshold) {
        menuOpen = false;
        menuToggleContainer.style.display = 'block';
        updateMenuState();
    }
});

window.addEventListener('resize', () => {
    updateMenuState();
});

document.addEventListener('click', (event) => {
    if (window.innerWidth <= screenWidthThreshold && menuOpen) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnToggle = menuToggleContainer.contains(event.target);

        if (!isClickInsideMenu && !isClickOnToggle) {
            menuOpen = false;
            updateMenuState();
        }
    }
});



const data = {
    "ru" : {
        "menu_about": "ОБО МНЕ",
        "menu_portfolio": "ПОРТФОЛИО",
        "menu_skills": "НАВЫКИ",
        "menu_joinMe": "НАПИСАТЬ",
        "menu_language" : "EN",
        "menu": "Меню",
        "myPortfolio": "ПОРТФОЛИО",
        "open" : "Открыть"
    },
    "en" : {
        "menu_about" : "ABOUT",
        "menu_portfolio" : "PORTFOLIO",
        "menu_skills" : "SKILLS",
        "menu_joinMe" : "JOIN ME",
        "menu_language" : "RU",
        "menu" : "Menu",
        "myPortfolio" : "MY WORKS",
        "open" : "Open"
    }
}
let currentLanguage = 'ru';

document.addEventListener('DOMContentLoaded', () => {

    updateContent(currentLanguage);
});

buttonLanguage.addEventListener('click', () => {

    currentLanguage = (currentLanguage === 'ru') ? 'en' : 'ru';
    buttonLanguage.setAttribute('data-language', currentLanguage);

    buttonLanguage.textContent = data[currentLanguage].menu_language;

    updateContent(currentLanguage);
});

function updateContent(language) {
    document.querySelector('.menu_about').textContent = data[language].menu_about;
    document.querySelector('.menu_portfolio').textContent = data[language].menu_portfolio;
    document.querySelector('.menu_skills').textContent = data[language].menu_skills;
    document.querySelector('.menu_joinMe').textContent = data[language].menu_joinMe;
    document.querySelector('.menuToggleBtn').textContent = data[language].menu;
    document.querySelector('.myPortfolio').textContent = data[language].myPortfolio;
    document.querySelectorAll('.open').forEach(element => {
        element.textContent = data[language].open;
    });
}