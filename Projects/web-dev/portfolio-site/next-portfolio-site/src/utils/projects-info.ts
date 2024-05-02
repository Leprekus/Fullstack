import nextjs from '../../public/black-&-white/nextjs.svg'
import typecsript from '../../public/black-&-white/typescript.png'
import react from '../../public/black-&-white/atom.png'
import tailwindcss from '../../public/black-&-white/tailwindcss.webp'
import express from '../../public/black-&-white/express-logo.png'
const techstack = {
    nextjs: {
        logo: nextjs,
        name: 'Next.js'
    },
    typescript: {
        logo: typecsript,
        name: 'Typescript'
    },
    tailwind: {
        logo: tailwindcss,
        name: 'TailwindCSS'
    },
    react: {
        logo: react,
        name: 'React'
    },
    express: {
        logo: express,
        name: 'Express'
    },
    redux: {
        logo: nextjs,
        name: 'TailwindCSS'
    },
}
const projectsInfo = [

    {
        title: 'Next Spotify Clone',
        github: 'https://github.com/Leprekus/next-spotify-clone',
        livedemo: 'https://next-spotify-clone-woad.vercel.app/',
        description: 'A full-featured music streaming web app built with Next.js and TypeScript. It uses PostgreSQL as a database and Stripe payment integration. Fully fledged features such as music playback playlist creation, and looping to ensure the user is always engaged.',
        image: '/project-images/next-spotify-clone.png',
        stack : [ techstack.nextjs, techstack.typescript, techstack.tailwind, techstack.react]
    },
    {
        title: 'Momento Social Media App',
        github: 'https://github.com/Leprekus/react-social-media-clone/tree/main/vite-social-media-app',
        livedemo: 'https://react-social-media-clone-one.vercel.app',
        description: 'Momento is a Fullstack application fully built in Javascript, Featuring a rich user interface with consistent layouts, styling and components. Momento features a JSON databse fully built in Typescript to persist data. I aim to bring a true native app experience to the browser utlizing components such as drawers and making use of modals for ease of navigationg. These components also keep in mind desktop users so neither platform feels out of place to the user. Momento offers a full feature-rich application allowing users to interact with content, share it with their followers making it easy to spread likes and comments across the platform.',
        image: '/project-images/momento-social-media.png',
        stack : [ techstack.express, techstack.typescript, techstack.tailwind, techstack.react]
    },
    {
        //TODO: add readme
        //email: raul@leprekus.dev
        //password: samplepassword123
        title: 'Admin Dashboard',
        github: 'https://github.com/Leprekus/admin-dashboard',
        livedemo: 'https://admin-dashboard.leprekus.dev/',
        description: 'Dashboard serves as a CMS and API for the ecommerce store. Allowing the user to customize the site and products.',
        image: '/project-images/admin-dashboard.png',
        stack : [ techstack.express, techstack.typescript, techstack.tailwind, techstack.react]
    },
    {
        //TODO: add readme
        title: 'Ecommerce Store',
        github: 'https://github.com/Leprekus/ecommerce-store',
        livedemo: 'https://momentum.leprekus.dev/',
        description: 'Browse categories, filter products and checkout your items. The site uses Stripe to handle checkouts and supports a beautiful fully responsive design.',
        image: '/project-images/ecommerce-store.png',
        stack : [ techstack.express, techstack.typescript, techstack.tailwind, techstack.react]
    },
/*

*/
   
    // {
    //     title: '',
    //     description: '',
    //     image: '',
    //     stack : []
    // },
    // {
    //     title: '',
    //     description: '',
    //     image: '',
    //     stack : []
    // },
]

export default projectsInfo