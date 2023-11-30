'use client'
import React from 'react'
import Button from '../Button'
import { usePathname, useRouter } from 'next/navigation'
import { LeftArrow } from '../Icons'


export default function NavWrapper() {

    const router = useRouter()
    const pathIsNotBlog = usePathname() !== '/blog'
    
   
  return (
    <nav className="top-24 fixed left-2">
        {pathIsNotBlog && 
        <Button
        className='bg-slate/30'
        onClick={() =>router.back()}
        variant="ghost" ><LeftArrow width={32} height={32} fill="rgb(75 85 99)"/>
        </Button>}
      </nav>
  )
}
