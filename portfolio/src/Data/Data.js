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
        "description": "Kasa is a dynamique and responsive web application using React and React Router. Thanks to SASS managing CSS and implementing CSS animations, the app is visually appealing."
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
        "description": "OhMyFood is a mobile-first web interface, integrating CSS animations to enhance it's visual appeal but also to improve the user experience."

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
        "description": "My portfolio.",
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
        "description": "Booki is a responsive web interface. This project integrates designs accurately with HTML and CSS, setting up an efficient development environment."

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
        "description": "ArgentBank is a dynamic and responsive front end banking application. In this project I learned to create a web page by integrating the front end with the back end via API calls."

    },
]

console.log(projectsDetails);