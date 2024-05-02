import { StaticImageData } from 'next/image';
import aboutMeIcon from '../../public/3d/about-me.png'
import projectsIcon from '../../public/3d/projects.png'
import techstackIcon from '../../public/3d/techstack.png'


interface ICardInfo {
    image: StaticImageData;
    title: string; 
    description: string;
    page: Page
}


export const techStackImages = [
    '/techstack/nextjs.png',
    '/techstack/react.png',
    '/techstack/redux.png',
    '/techstack/tailwind.png',
    '/techstack/ts.svg.png',
]
export const techStackTooltips = [ 'Next.Js', 'React', 'Redux', 'TailwindCSS', 'Typescript' ]