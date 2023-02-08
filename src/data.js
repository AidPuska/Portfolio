import yelp from './assets/yelpcamp.png'
import proManag from './assets/proManag.png'
import portfolio from './assets/portfolio.png'
import vaktija from './assets/vaktija.png'


export const projects = [
    {
        id: 0,
        name: 'Yelp Camp',
        desc: 'Site for making new campgrounds, reviewing other campgrounds by commenting them, giving them grade.',
        img: yelp,
        madeWith: 'MEN Stack(Mongo DB with mongoose, Express and Node)',
        link: '//'
    },
    {
        id: 1,
        name: 'Projects Managment',
        desc: 'Add new project or project part, assign it to some registred user, se online/offline users',
        img: proManag,
        madeWith: 'FrontEnd(React, Tailwind CSS) & BackEnd(Firebase)',
        link: 'https://projectsmanagment-f43a4.web.app/'
    },
    {
        id: 2,
        name: 'Portfolio page',
        desc: 'Portfolio page for personal use',
        img: portfolio,
        madeWith: 'React, Tailwind CSS, Framer motion for animations',
        link: 'https://apuska.netlify.app/'
    },
    {
        id: 3,
        name: 'E-commerce app',
        desc: 'Simple e-commerce app.',
        img: 'https://user-images.githubusercontent.com/108176604/216184632-481bc902-7c81-482b-ad4d-f338ee9580a1.png',
        madeWith: 'MERN Stack, TailwindCSS',
        link: 'https://github.com/AidPuska/e-commerce'
    },
    {
        id: 4,
        name: 'Vaktija Interactive Map',
        desc: 'Get Prayer Time for towns available in Vaktija.ba Api',
        img: vaktija,
        madeWith: 'React, Pure CSS, Mapbox, Vaktija Api',
        link: 'https://vaktijainteractivemap.netlify.app/'
    }
]