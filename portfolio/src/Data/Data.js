import OhMyFood from "../assets/OhMyFood.webp";
import Kasa from "../assets/Kasa.webp";
import Portfolio from "../assets/Portfolio.webp";
import ArgentBank from "../assets/ArgentBank.webp";
import Booki from "../assets/Booki.webp";


export const projectsDetails = [
    {
        "title": "Kasa,",
        "undertitle": "Real estate rental web application",
        "cover": Kasa,
        "link": [{
            "url": "https://ferdjani-brahim-8-qqhfmjtn1-brahims-projects-415e5c3b.vercel.app",
            "detail": "Link to the site"
        },
        {
            "url": "https://www.figma.com/design/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR",
            "detail": "Link to Figma"
        },
        {
            "url": "https://github.com/brahimferdjani/Ferdjani_Brahim_8.git",
            "detail": "Link to Github"
        },
        ],
        "technologies": [
            "React",
            "Sass",
            "Responsive",
            "ReactRouter",
            "NodeJs",
        ],
        "description": "Kasa is a dynamique and responsive web application using React and React Router. Thanks to SASS managing CSS and implementing CSS animations, the app is visually appealing. It's an OpenClassrooms project in which i had a lot of fun and in which i have enhanced my skills in React and React Router."
    },
    {
        "title": "OhMyFood,",
        "undertitle": "Improve a mobile site's interface with CSS animations",
        "cover": OhMyFood,
        "link": [{ "url": "https://brahimferdjani.github.io/OhMyFood/", "detail": "Link to the site" },
        { "url": "https://www.figma.com/design/t4449fzDnwGYmzuwQdu87V/Maquettes-Ohmyfood-(mobile-et-desktop)", "detail": "Link to Figma" },
        { "url": "https://github.com/brahimferdjani/OhMyFood.git", "detail": "Link to Github" }],
        "technologies": [
            "HTML5",
            "Sass",
            "Responsive",
        ],
        "description": "OhMyFood is a mobile-first web interface, integrating CSS animations to enhance it's visual appeal but also to improve the user experience. It was on of  this OpenClassrooms project, I have enhanced my skills in HTML5 and SASS for the responsive. My third project mastering even more HTML and CSS. "

    },
    {
        "title": "Portfolio",
        "undertitle": null,
        "cover": Portfolio,
        "link": [
            { "url": "https://github.com/brahimferdjani/Portfolio.git", "detail": "Link to Github" }],
        "technologies": [
            "React",
            "Sass",
            "Responsive",
        ],
        "description": "My portfolio. I enjoyed making my portfolio. It was challenging to think of a theme and concept.",
    },
    {
        "title": "Booki,",
        "undertitle": "Improve a mobile site's interface with CSS animations",
        "cover": Booki,
        "link": [{ "url": "https://brahimferdjani.github.io/booki-starter-code-master/", "detail": "Link to the site" },
        { "url": "https://github.com/brahimferdjani/booki-starter-code-master.git", "detail": "Link to Github" }],
        "technologies": [
            "HTML5",
            "Responsive",
        ],
        "description": "Booki is a responsive web interface. This project integrates designs accurately with HTML and CSS, setting up an efficient development environment. My second project introducing me to HTML and CSS, it was tough at first, but as I learned more, it became more enjoyable. "

    },
    {
        "title": "ArgentBank,",
        "undertitle": "Online bank application",
        "cover": ArgentBank,
        "link": [
            { "url": "https://github.com/brahimferdjani/ArgentBank-Frontend-main.git", "detail": "Link to Github" }],
        "technologies": [
            "React",
            "Responsive",
            "Redux",
        ],
        "description": "ArgentBank is a dynamic and responsive front end banking application. In this project I learned to create a web page by integrating the front end with the back end via API calls. I loved this project, especially when I was implementing secure connection from the account with the user email and password. "

    },
]

console.log(projectsDetails);