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