import Card from '@/components/Portfolio/Card';
import profilePicture from '../../../public/profile-picture.jpeg';
import { techStackImages } from '@/utils/card-info';
import Image from 'next/image';
import { LinkWrapper } from '@/components/Button';
import { GithubIcon, LinkedInIcon } from '@/components/Icons';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import CardHolder from '@/components/Portfolio/CardHolder';

//const inter = Inter({ subsets: ['latin'] })

//nav: resume, contact,
//maybe: projects, techstack (i want to do kind of an iframe out of the card components)
export default function Home() {
  return (
    <div className="text-center pb-10">
      <div className="flex items-center gap-x-4 mx-auto w-fit">
        <div className="
        w-16 
        h-16 
        rounded-full
        bg-gray-200 
        flex 
        items-center 
        justify-center 
        overflow-x-hidden 
        sm:overflow-hidden">
          <Image
            src={profilePicture}
            width={70}
            height={70}
            alt="profile-picture"
          />
        </div>
        <p className="text-gray-600">Raul Rodriguez</p>
        <LinkWrapper
          padding={false}
          target="_blank"
          href="https://github.com/leprekus"
        >
          <FaGithubSquare size={24} />
        </LinkWrapper>
        <LinkWrapper
          padding={false}
          target="_blank"
          href="https://www.linkedin.com/in/raul-rodriguez-4a0037192/"
        >
          <FaLinkedin size={24} />
        </LinkWrapper>
      </div>
      <h1 className="block mx-auto">Front-end Engineer.</h1>
      <CardHolder />
      <div className="hidden md:flex text-gray-400 my-6  gap-4 w-fit mx-auto">
        <p>Techstsack |</p>
        {techStackImages.map((src, i) => (
          <Image key={i} src={src} width={24} height={12} alt="tech-icon" />
        ))}
      </div>
    </div>
  );
}
