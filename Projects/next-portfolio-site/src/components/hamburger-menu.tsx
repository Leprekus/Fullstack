'use client'
import { navItems } from '@/utils/nav-items'
import React, { ChangeEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { LinkWrapper } from './Button'
import { usePathname } from 'next/navigation'

export default function HamburgerMenu() {

  const pathname = usePathname()


  const [animatedProps, setAnimatedProps] = useState({
    opacity: 0
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    animatedProps.opacity === 0 ? 
    setAnimatedProps(prevState => ({
      ...prevState,
      opacity: 1,
    })) :
    setAnimatedProps(prevState => ({
      ...prevState,
      opacity: 0,
    }))
  }
  return (
    <div
    className='w-5 h-5 flex items-center justify-center md:hidden menu'>
        <input type="checkbox" onChange={handleChange} className='absolute cursor-pointer opacity-0 z-10 h-6 w-6' id='checkbox' name=""  />
        <span className='w-5 h-1 bg-gray-300 rounded-full mt-4 burger-top absolute transition-all'/>
        <span className='w-5 h-1 bg-gray-300 rounded-full burger-bottom transition-all'/>
        <motion.ul 
        animate={animatedProps}
        className='absolute top-20 left-0 hidden bg-white w-full pb-4
        flex-col md:hidden tracking-wider font-semibold menu'>
            {navItems.map((item, i) => (
                <li key={i} className='flex w-full'>
                    <LinkWrapper className={`flex-grow ${pathname === item.href ? 'text-blue-500' : ''}`}
                    variant='ghost' 
                    href={item.href}>{item.title}</LinkWrapper>
                </li>
            ))}
        </motion.ul>
    </div>
  )
}
