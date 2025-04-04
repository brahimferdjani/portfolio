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
            "NodeJs",
        ],
        "description": "Kasa is a dynamic and responsive web application built with React and React Router. By leveraging SASS for efficient CSS management and animations, the app delivers a visually engaging experience. This project was both enjoyable and instrumental in strengthening my skills in React and React Router."
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
        ],
        "description": "OhMyFood is a mobile-first web interface that incorporates CSS animations to enhance both visual appeal and user experience. Through this project, I developed a strong understanding of HTML5, SASS, and the principles of responsive design."

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
        ],
        "description": "My portfolio — a project that challenged me to create a design that balances functionality and aesthetics. It pushed me to think critically about user experience while ensuring a visually appealing and intuitive interface.",
    },
    {
        "title": "Booki,",
        "undertitle": "Improve a mobile site's interface with CSS animations",
        "cover": Booki,
        "link": [{ "url": "https://brahimferdjani.github.io/booki-starter-code-master/", "detail": "Link to the site" },
        { "url": "https://github.com/brahimferdjani/booki-starter-code-master.git", "detail": "Link to Github" }],
        "technologies": [
            "HTML5",
            "CSS"
        ],
        "description": "Booki is a responsive web interface designed to accurately integrate provided designs using HTML and CSS. This project helped me build a strong foundation in web development by introducing key concepts such as HTML structure, nesting, tags, parameters, and responsive design. Additionally, I set up an efficient development environment to streamline the coding process."

    },
    {
        "title": "ArgentBank,",
        "undertitle": "Online bank application",
        "cover": ArgentBank,
        "link": [
            { "url": "https://github.com/brahimferdjani/ArgentBank-Frontend-main.git", "detail": "Link to Github" }],
        "technologies": [
            "React",
            "Sass",
        ],
        "description": "ArgentBank is a dynamic and responsive front-end banking application. Through this project, I gained hands-on experience in integrating a web page with a back-end system using API calls. I leveraged Redux to efficiently store and manage application state, ensuring seamless user interactions. Additionally, Redux enabled secure account authentication using email and password credentials."
    },
]

console.log(projectsDetails);