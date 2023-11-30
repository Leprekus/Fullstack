'use client'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Button from '../Button'

export default function Card({image, title, description, handleClick}: {image: StaticImageData, title: string, description: string, handleClick: Function }) {
  
  return (
    <div className='w-64 h-72 md:w-60 lg:w-80 lg:h-96
    rounded-lg  bg-white py-3 shadow flex flex-col justify-between items-center'
    >
        <div className='w-60 h-40 md:w-56 lg:w-72 lg:h-48 
        mx-auto bg-[#fff6f6] rounded-md flex justify-center items-center overflow-hidden'>
            <Image src={image} width={288} height={192} alt='card-image'/>
        </div>
        <div className='w-11/12 mx-auto'>
            <h3 className='text-xl md:text-lg lg:text-2xl text-gray-800'>{title}</h3>
            <p className='text-xs md:text-sm lg:text-base text-gray-500 '>{description}</p>
        </div>
        <Button className='w-fit' onClick={ handleClick }>See more</Button>
    </div>
  )
}
