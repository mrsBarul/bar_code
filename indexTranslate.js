const buttonLanguage = document.querySelector('.buttonLanguage')
const hello = document.querySelector(".hello");
const iAm = document.querySelector(".iAm");
const webDev = document.querySelector(".webDev");

const data = {
    "ru" : {
        "greeting_one": "Привет,",
        "greeting_two": "Я Кристина,",
        "greeting_three": "веб-разработчик.",
        "greeting_joinMe": "Написать",
        "adoutMe": "ОБО МНЕ",
        "aboutMe_history_one": "Два года назад я рискнула и сменила профессию, чтобы заняться программированием.",
        "aboutMe_history_two": "Я full-stack разработчик, закончила курсы программирования в CanSheCode, а сейчас углубляю свои знания и навыки на стажировке в AL Tech Labs Ltd.",
        "aboutMe_fact_one": "Я обожаю вселенную Гарри Поттера.",
        "aboutMe_fact_two": "Моя мечта — принять участие в археологической<br> экспедиции в Египте.",
        "aboutMe_fact_three": "Хочу внести вклад в будущее, где технологии<br> возвращают возможности.",
        "myPortfolio": "ПОРТФОЛИО",
        "myWorks_seeMore": "Открыть",
        "mySkills": "НАВЫКИ",
        "skills_description": "Мои навыки позволяют мне создавать уникальные адаптивные <br>веб-сайты, используя HTML, CSS, Bootstrap,<br> JavaScript, React, Redux и Node.js",
        "joinMe_title": "НАПИСАТЬ",
        "joinMe_appeal": "давайте сделаем что-то великолепное",
        "joinMe_name": "Имя",
        "joinMe_email": "Почта",
        "joinMe_message": "Сообщение",
        "joinMe_send": "Отправить",
        "menu_about": "ОБО МНЕ",
        "menu_portfolio": "ПОРТФОЛИО",
        "menu_skills": "НАВЫКИ",
        "menu_joinMe": "НАПИСАТЬ",
        "menu_language" : "EN",
        "menu": "Меню"
    },
    "en" : {
        "greeting_one" : "Hello,",
        "greeting_two" : "I'm Kristina,",
        "greeting_three" : "web developer.",
        "greeting_joinMe" : "Join me",
        "adoutMe" : "ABOUT",
        "aboutMe_history_one" : "Two years ago, I took a chance and switched careers to pursue programming.",
        "aboutMe_history_two" : "Having completed a Full Stack bootcamp at CanSheCode, I am currently deepening my skills through an internship at AL Tech Labs Ltd.",
        "aboutMe_fact_one" : "I love the Harry Potter universe.",
        "aboutMe_fact_two" : "I dream is to get into an archaeological<br> expedition in Egypt.",
        "aboutMe_fact_three" : "I hope to contribute to a future where technology<br> brings back lost abilities.",
        "myPortfolio" : "MY WORKS",
        "myWorks_seeMore" : "See more",
        "mySkills" : "SKILLS",
        "skills_description" : "My skills allow me to create unique adaptive<br>websites and using HTML, CSS, Bootstrap, <br>JavaScript, React, Redux and Node.js",
        "joinMe_title" : "JOIN ME",
        "joinMe_appeal" : "let's start doing<br> something great",
        "joinMe_name" : "Name",
        "joinMe_email" : "Email",
        "joinMe_message" : "Message",
        "joinMe_send" : "Send",
        "menu_about" : "ABOUT",
        "menu_portfolio" : "PORTFOLIO",
        "menu_skills" : "SKILLS",
        "menu_joinMe" : "JOIN ME",
        "menu_language" : "RU",
        "menu" : "Menu"
    }
}
let currentLanguage = 'ru';
let typingTimeouts = [];

document.addEventListener('DOMContentLoaded', () => {

    updateContent(currentLanguage);
    typeGreetings(currentLanguage);
});

buttonLanguage.addEventListener('click', () => {

    currentLanguage = (currentLanguage === 'ru') ? 'en' : 'ru';
    buttonLanguage.setAttribute('data-language', currentLanguage);

    buttonLanguage.textContent = data[currentLanguage].menu_language;

    hello.textContent = '';
    iAm.textContent = '';
    webDev.textContent = '';

    typingTimeouts.forEach(timeout => clearTimeout(timeout));
    typingTimeouts = [];

    updateContent(currentLanguage);
    typeGreetings(currentLanguage);
});

function updateContent(language) {
    document.querySelector('.menu_about').textContent = data[language].menu_about;
    document.querySelector('.menu_portfolio').textContent = data[language].menu_portfolio;
    document.querySelector('.menu_skills').textContent = data[language].menu_skills;
    document.querySelector('.menu_joinMe').textContent = data[language].menu_joinMe;
    document.querySelector('.greeting_joinMe').textContent = data[language].greeting_joinMe;
    document.querySelector('.menuToggleBtn').textContent = data[language].menu;
    document.querySelector('.adoutMe').textContent = data[language].adoutMe;
    document.querySelector('.aboutMe_history_one').textContent = data[language].aboutMe_history_one;
    document.querySelector('.aboutMe_history_two').textContent = data[language].aboutMe_history_two;
    document.querySelector('.aboutMe_fact_one').textContent = data[language].aboutMe_fact_one;
    document.querySelector('.aboutMe_fact_two').innerHTML = data[language].aboutMe_fact_two;
    document.querySelector('.aboutMe_fact_three').innerHTML = data[language].aboutMe_fact_three;
    document.querySelector('.myPortfolio').textContent = data[language].myPortfolio;
    document.querySelectorAll('.myWorks_seeMore').forEach(element => {
        element.textContent = data[language].myWorks_seeMore;
    });
    document.querySelector('.mySkills').textContent = data[language].mySkills;
    document.querySelector('.skills_description').innerHTML = data[language].skills_description;
    document.querySelector('.joinMe_title').textContent = data[language].joinMe_title;
    document.querySelector('.joinMe_name').textContent = data[language].joinMe_name;
    document.querySelector('.joinMe_email').textContent = data[language].joinMe_email;
    document.querySelector('.joinMe_message').textContent = data[language].joinMe_message;
    document.querySelector('.joinMe_send').textContent = data[language].joinMe_send;
    document.querySelector('.joinMe_appeal').innerHTML = data[language].joinMe_appeal;
}

function typeGreetings(language) {
    let i = 0, a = 0, b = 0;
    const speed = 20;

    function one() {
        if (i < data[language].greeting_one.length) {
            hello.textContent += data[language].greeting_one.charAt(i);
            i++;
            typingTimeouts.push(setTimeout(one, speed));
        }
    }

    function two() {
        if (a < data[language].greeting_two.length) {
            iAm.textContent += data[language].greeting_two.charAt(a);
            a++;
            typingTimeouts.push(setTimeout(two, speed));
        }
    }

    function three() {
        if (b < data[language].greeting_three.length) {
            webDev.textContent += data[language].greeting_three.charAt(b);
            b++;
            typingTimeouts.push(setTimeout(three, speed));
        }
    }

    one();
    typingTimeouts.push(setTimeout(two, 200));
    typingTimeouts.push(setTimeout(three, 550));
}