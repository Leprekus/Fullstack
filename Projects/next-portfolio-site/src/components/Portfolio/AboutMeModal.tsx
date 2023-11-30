'use client'
import React from 'react'
import Modal from './Modal'
import Link from 'next/link'
import useAboutMeModal from '@/hooks/useAboutMeModal'

export default function AboutMeModal() {
  const { isOpen, Close } = useAboutMeModal()
  return (
  <Modal isOpen={isOpen} onChange={Close}>
    <div className='flex flex-col  gap-x-6 h-fit p-6 px-12 lg:px-32 lg:py-10 text-justify'>
      <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 pb-2'>Raul Rodriguez</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div className='bg-gray-300/30 p-10 rounded-md h-fit sm:h-[300px] md:h-[400px] col-span-1'>
          <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 h-fit'>About Me.</h2>
            <p className='text-base md:text-lg text-gray-700'>
              Hi there! My name is Raul Rodriguez, and I&apos;m a Front-End developer with two years of experience working in the tech industry.
              I specialize in React development, and I love learning new technologies and improving my skills by sharing and contributing in Discord and Github communities.
            </p>
        </div>
        <div className='bg-gray-300/30 p-10 rounded-md h-fit sm:h-[300px] md:h-[400px] col-span-1'>
          <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600'>Hobbies</h2>
          <p className='text-base md:text-lg text-gray-600'>
            I have always preferred learning by getting hands on experience. This ranges from coding to pretty much anything
            in my daily life. My favorite after school activities are weightlifting and playing the guitar. I also feel passionate 
            about neurons and have a goal of revolutionizing neural networks.
          </p>
        </div>
        <div className='bg-gray-300/30 p-10 h-fit rounded-md sm:h-[300px] col-span1 lg:col-span-2'>
          <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600'>Proffesional Journey</h2>
          <p className='text-base md:text-lg text-gray-600'>
            I started this journey with a dream and a Codecademy membership. After one year I successfully completed the frontend engineer
            path and set out to learn new technologies. Throughout this time, I discovered a newfound passion for system design, and neural networks
            among other things. If you have any questions or are ready to talk business, please don&apos;t hesitate to reach out to me at <Link
            className='text-blue-500 underline hover:text-blue-400 transition-all'
            href='mailto:raulrodriguez@leprekus.dev'>raulrodriguez@leprekus.dev</Link>.
          </p>
        </div>
      </div>
    </div>    
  </Modal>
  )
}
