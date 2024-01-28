'use client'

import React from 'react'
import Card from './Card'
import useAboutMeModal from '@/hooks/useAboutMeModal'
import useProjectsModal from '@/hooks/useProjectsModal'
import aboutMeIcon from '../../../public/3d/about-me.png'
import projectsIcon from '../../../public/3d/projects.png'

export default function CardHolder() {
  
  const { Open: OpenAboutMe } = useAboutMeModal()
  const { Open: OpenProjects } = useProjectsModal()

  const cardInfo = [
    {
    image: aboutMeIcon,
    title: 'About Me',
    description: 'I am a passionate Next.js React developer based in Victoria, BC. 📍',
    page: 'AboutMe',
    handleClick:  OpenAboutMe
    },
    {
    image: projectsIcon,
    title: 'Projects',
    description: 'See what I\'ve been up to. (Side projects graveyard not included) 👾',
    page: 'Projects',
    handleClick: OpenProjects
    },
    // {
    // image: techstackIcon,
    // title: 'Techstack',
    // description: 'The toolkit under every developer\'s belt. Click to see in-depth. 💻',
    // page: 'Techstack'
    // },
]
  return (
    <div className='flex flex-col items-center md:flex-row justify-between mt-8 gap-4'>
          {cardInfo.map((info, i) => (
            <Card 
              key={i}
              image={info.image}
              title={info.title}
              description={info.description}
              handleClick={info.handleClick}

            />
          ))}
        </div>
  )
}
