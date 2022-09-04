import {
    IoCodeWorking,
    IoLogoGithub,
    IoLogoYoutube,
    IoLogoTwitter,
    IoLogoLinkedin,
    IoLogoWhatsapp,
} from "react-icons/io5";
import { BsInstagram } from 'react-icons/bs'
import Chat from "./imgs/Chat.png"
import CVweb from "./imgs/CVweb.png"
import Fractals from "./imgs/Fractals.png"
import Movie from "./imgs/Movie.png"
import ragdollSmasher from "./imgs/ragdollSmasher.png"
import Rps from "./imgs/Rps.png"
import SpaceRangers from "./imgs/SpaceRangers.png"

export const Experience = [
    {
        id: 10,
        date: <span className='text-white'>2022 - present</span>,
        iconsSrc: <IoCodeWorking />,
        title: "Personal project",
        location: "Tbilisi, Georgia",
        description:
            "I am creating a commercial game to publish on steam during the free time ",
    },
    {
        id: 1,
        date: <span className='text-white'>2022 - present</span>,
        iconsSrc: <IoCodeWorking />,
        title: "GITA Entrepreneurship bootcamp",
        location: "Kutaisi, Georgia",
        description:
            "Got accepted in university bootcamp and with newly gained skills worked on startup ideas with my teammates",
    },
    {
        id: 4,
        date: <span className='text-white'>2022 - present</span>,
        iconsSrc: <IoCodeWorking />,
        title: "Visual math contest",
        location: "Kutaisi International University, Georgia",
        description:
            "Created several applications with my teammates to simulate and visualise 3D fractals, currently waiting for finals which will be held in september",
    },
    {
        id: 2,
        date: <span className='text-white'>2021 - 2022</span>,
        iconsSrc: <IoCodeWorking />,
        title: "Unity developer",
        location: "Tbilisi, Georgia - Remote",
        description:
            "Worked as a games programmer and published several projects with success, also helped our company in researching the market and generating ideas",
    },
    {
        id: 5,
        date: <span className='text-white'>2021 - 2025 - present</span>,
        iconsSrc: <IoCodeWorking />,
        title: <a href="https://www.kiu.edu.ge/" className="text-blue-500 hover:text-xl duration-100">Kutaisi International University</a>,
        location: "Kutaisi, Georgia",
        description:
            "Got accepted in the best University of my country with full scolarship, fincancial and living aid, current GPA - 3.69",
    },
    {
        id: 3,
        date: <span className='text-white'>2009 - 2021</span>,
        iconsSrc: <IoCodeWorking />,
        title: "School",
        location: "Tbilisi, Georgia",
        description:
            "Finished Highschool with GPA 10/10 and a certificate of an honor student",
    },
    
];


export const Projects = [
    {
        id: 1,
        name: "CV website",
        imageSrc: CVweb,
        techs: "HTML,CSS,JS,Bootstrap",
        description:
            "   My very first website that i created after studying main concepts of web dev",
        github: "https://github.com/LukeGorgadze/CV",
    },
    {
        id: 2,
        name: "Rock Paper Scissors",
        imageSrc: Rps,
        techs: "React Js,CSS,JS",
        description:
            "   After learning react, it was my first project that i created on my own",
        github: "https://github.com/LukeGorgadze/web-projects",
    },
    {
        id: 3,
        name: "Movie Appliation",
        imageSrc: Movie,
        techs: "React Js,Node Js,Express,MongoDB, Sass,Css,HTML,JS",
        description:
            "   Full stack web application (MERN) with authentication",
        github: "https://github.com/LukeGorgadze/Movie-App/tree/master",
    },
    {
        id: 4,
        name: "Chat Application",
        imageSrc: Chat,
        techs: "HTML,CSS,JS,FireBase,Three JS",
        description:
            "   One of my experimental projects before i knew react and node, made it with plain html, css, js , Firebase and Three Js",
        github: "https://github.com/LukeGorgadze/Chat",
    },
    {
        id: 5,
        name: "Fractals",
        imageSrc: Fractals,
        description:
            "   2D and 3D fractal simulations for Visual Math Contest, collaborating with my friends, teammates",
        techs: "React Js, Chara UI, Firebase",
        github: "https://github.com/LukeGorgadze/GLSL",
    },
    {
        id: 6,
        name: "Space Rangers",
        imageSrc: SpaceRangers,
        description:
        "   Even though i have worked on lots of projects this one is still my favourite, made ages ago with new programming skills",
        techs: "Unity, C#",
        github: "https://luka-gorgadze.itch.io/spacerangers",
    },
    {
        id: 7,
        name: "Ragdoll Smasher",
        imageSrc: ragdollSmasher,
        description:
        "   First ever game for our startup Game dev studio, looks nice and colorful doesn't it?",
        techs: "NextJs, Firebase Auth",
        github: "https://github.com/LukeGorgadze/RagdollSmasher",
    },
];

export const SocialLinks = [
    {
        id: 1,
        iconSrc: <IoLogoGithub className="text-white text-3xl cursor-pointer mx-1" />,
        name: "GitHub",
        link: "https://github.com/LukeGorgadze",
    },
    {
        id: 2,
        iconSrc: <BsInstagram className="text-orange-500 text-3xl cursor-pointer mx-1" />,
        name: "Instagram",
        link: "https://www.instagram.com/lukegorgadze/",
    },
    {
        id: 3,
        iconSrc: (
            <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer mx-1" />
        ),
        name: "Twitter",
        link: "https://twitter.com/LukeGorgadze",
    },
    {
        id: 4,
        iconSrc: (
            <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer mx-1" />
        ),
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/luka-gorgadze-a926a3241/",
    },
];