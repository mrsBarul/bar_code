const mainPage = document.querySelector('#mainPage');
const carouselContainer = document.querySelector(".imageWorksContainer");
const carouselSlides = Array.from(carouselContainer.children);
const prevButton = document.querySelector(".btnPrev");
const nextButton = document.querySelector(".btnNext");
const linkMenuItems = document.querySelectorAll('.linkMenuItem');
const underLines = document.querySelectorAll('.underLine');
const playPauseButton = document.querySelector('.playPauseButton');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const audio = document.querySelector('.audio');
const click = document.querySelector('.click');
const image = document.querySelectorAll('.image');
const sendBtn = document.querySelector('.sendBtn');
const menuToggleContainer = document.querySelector('.menuToggleContainer');
const menu = document.querySelector('nav');
const javaScript = document.querySelector('.JAVASCRIPT')



window.addEventListener('DOMContentLoaded', () => {
    if (mainPage) {
        window.scrollTo({
            behavior: "smooth",
            top: mainPage.offsetTop
        });
    }
});

document.querySelector("#logo").addEventListener("click", function(e) {
    e.preventDefault()
    scrollToElement(mainPage);
});

document.querySelector("#about").addEventListener("click", function(e) {
    e.preventDefault()
    scrollToElement(document.querySelector("#aboutContainer"));
});

document.querySelector("#portfolio").addEventListener("click", function(e) {
    e.preventDefault()
    scrollToElement(document.querySelector("#portfolioContainer"));
});

document.querySelector("#skills").addEventListener("click", function(e) {
    e.preventDefault()
    scrollToElement(document.querySelector("#skillsContainer"));
});

document.querySelector("#joinMe").addEventListener("click", function(e) {
    e.preventDefault()
    scrollToElement(document.querySelector("#joinMeContainer"));
});

document.querySelector(".joinMeBtn").addEventListener("click", function(e) {
    e.preventDefault()
    scrollToElement(document.querySelector("#joinMeContainer"));
});

sendBtn.addEventListener('click', () => {
    click.play()
})

function scrollToElement(targetElement) {
    click.play();

    if (targetElement) {
        const yOffset = targetElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: yOffset,
            behavior: 'smooth'
        });
    }
}


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


    let activeIndex = 4;
    const activeSlide = carouselSlides[activeIndex];


    function showTooltip() {
        const activeSlide = document.querySelector('.active');
        const tooltip = activeSlide.querySelector('.tooltip');
        const tooltipItem = tooltip.querySelector('.tooltipItem');
        let height = 0; 
        let targetHeight = window.innerWidth >= 768 ? 90 : 60;
        const animationSpeed = 2; 

        const interval = setInterval(() => {
            height += animationSpeed;
            tooltip.style.height = `${height}px`;

            if (height >= targetHeight) {
                clearInterval(interval)
            } else if(height < targetHeight) {
                tooltipItem.style.opacity = 1
            }
        }, 10); 
    }


    function hideTooltip(slide) {
        const tooltip = slide.querySelector('.tooltip');
        const tooltipItem = tooltip.querySelector('.tooltipItem');
        let height = parseInt(tooltip.style.height);
        const animationSpeed = 2; 

        const interval = setInterval(() => {
            height -= animationSpeed;
            tooltip.style.height = `${height}px`;

            if (height <= 0) {
                tooltipItem.style.opacity = 0,
                clearInterval(interval)
            }
        }, 10); 
    }

    function setActiveSlide() {
        carouselSlides.forEach((slide, index) => {
        if (index === activeIndex) {
            slide.classList.add("active");
            showTooltip(); 
        } else {
        slide.classList.remove("active");
        hideTooltip(slide);
        }
        });
    }

    function nextSlide() {
        click.play()
        const firstSlide = carouselSlides.shift();
        carouselSlides.push(firstSlide);
        activeIndex = activeIndex % carouselSlides.length;
        carouselSlides.forEach((slide) => {
            carouselContainer.appendChild(slide);
        });
        setActiveSlide();
    }

        function prevSlide() {
            click.play()
        const lastSlide = carouselSlides.pop();
        carouselSlides.unshift(lastSlide);
        activeIndex = (activeIndex + carouselSlides.length) % carouselSlides.length;
        carouselSlides.forEach((slide) => {
            carouselContainer.appendChild(slide);
        });
        setActiveSlide();
    }


    setActiveSlide();
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);


for (let i = 0; i < image.length; i++) {
    image[i].addEventListener('mouseover', function() {
        let skill = this.nextElementSibling;
        const percentContainer = this.closest('.skillsImage').querySelector('.percentContainer');
        const span = percentContainer.querySelector('span');
        const colorLine = percentContainer.querySelector('.colorLine');
        const width = span.innerHTML;
        if (skill.style.opacity = '0') {
            skill.style.opacity = '1';
            skill.style.zIndex = '11';
            click.play();
            colorLine.style.width = width;
        }
    })

    image[i].addEventListener('mouseout', function() {
        let skill = this.nextElementSibling;
        const percentContainer = this.closest('.skillsImage').querySelector('.percentContainer');
        const colorLine = percentContainer.querySelector('.colorLine');
        if (skill.style.opacity = '1') {
            skill.style.opacity = '0';
            skill.style.zIndex = '0';
            colorLine.style.width = '0';
        }
    })
}


let menuOpen = true;
const screenWidthThreshold = 550;


function updateMenuState() {
    if (window.innerWidth <= screenWidthThreshold) {
        menu.style.display = menuOpen ? 'block' : 'none'; 
        menuToggleContainer.style.display = menuOpen ? 'none' : 'block';
    } else {
        menu.style.opacity = 1;
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
    updateSkillsClasses();
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


    function updateSkillsClasses() {
        const skillsShow = javaScript.querySelector(".skillsShow");
        const arrow = javaScript.querySelector(".arrow");
    
        if (window.innerWidth <= screenWidthThreshold) {
            skillsShow.classList.remove("skillsShowRight");
            skillsShow.classList.add("skillsShowLeft");
            arrow.classList.remove("arrowRight");
            arrow.classList.add("arrowLeft");
        } else {
            skillsShow.classList.remove("skillsShowLeft");
            skillsShow.classList.add("skillsShowRight");
            arrow.classList.remove("arrowLeft");
            arrow.classList.add("arrowRight");
        }
    }

    updateSkillsClasses()








