'use client'
import React from 'react';
import Modal from './Modal';
import Link from 'next/link';
import Image from 'next/image';
import projectsInfo from '@/utils/projects-info';
import { FaGithubSquare } from 'react-icons/fa';
import useProjectsModal from '@/hooks/useProjectsModal';
export default function ProjectsModal() {
  const { isOpen, Close } = useProjectsModal()
  return (
    <Modal isOpen={isOpen} onChange={Close}>
      <div className='py-10 px-16'>
        {projectsInfo.map((project, i) => (
          <>
            <div
              key={`${project.title}_${i}`}
              className='flex flex-col items-center
        lg:flex-row text-center lg:text-justify lg:gap-x-4 mb-4'
            >
              <div className='
              w-96
              h-80
              sm:w-[820px] sm:h-[460px]
              md:min-w-[420px] md:h-[260px]
              bg-black overflow-hidden'>
                {project.image && (
            
                  <img
                    className='min-h-full min-w-full'
                    src={project.image}
                    alt='project image'
                  />
                )}
            
              </div>
              <div className='flex flex-col gap-y-4'>
                <div className='flex flex-col w-fit mx-auto'>
                  
                    <h1>{project.title}</h1>
                      <div className='flex items-center justify-between w-42 w-48 mx-auto'>
                        <Link href={project.github} target='_blank'><FaGithubSquare size={44}/></Link>
                        <Link href={project.livedemo} target='_blank' className='tracking-wider border-2 bg-black text-white hover:bg-transparent hover:text-black border-black px-4 py-2 uppercase transition-all min-w-fit'>Live Demo</Link>
                      </div>
                </div>
                <p>{project.description}</p>
                <h3>Stack</h3>
                <div className='flex gap-x-2 flex-wrap gap-y-2'>
                  {project.stack.map(({ logo, name }, i) => (
                    <span
                      key={`${project.title}_stack_${i}`}
                      className='px-4 py-1 border-2 border-black flex gap-x-4 min-w-fit'
                    >
                      <Image
                        src={logo}
                        width={24}
                        height={24}
                        alt='tech-stack-icon'
                      />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <hr className='w-full pb-4' />
          </>
        ))}
      </div>
    </Modal>
  );
}
