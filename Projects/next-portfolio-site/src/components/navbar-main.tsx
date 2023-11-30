'use client'
import { navItems } from '@/utils/nav-items'
import React from 'react'
import { LinkWrapper } from './Button'
import Link from 'next/link'
import HamburgerMenu from './hamburger-menu'
import { usePathname, useRouter } from 'next/navigation'

export default function NavbarMain() {

  const pathname = usePathname()
  return (
    <nav className='flex-col h-20 md:flex-row top-0 fixed bg-white shadow w-full mx-auto flex justify-between items-center px-4 '>
        <div className='flex justify-between w-full items-center px-2 md:block'>
          <Link href='/'>
            <h3><span className='text-slate-500'>Leprekus</span>.dev</h3>
          </Link>
          <HamburgerMenu/>
        </div>
        <ul className='hidden md:flex w-fit tracking-wider font-semibold'>
            {navItems.map((item, i) => (
                <li key={i} className='relative'>
                    <LinkWrapper 
                    className={pathname === item.href ? 'text-blue-500' : ''}
                    variant='ghost' href={item.href}>{item.title}</LinkWrapper>
                </li>
            ))}
        </ul>
    </nav>
  )
}
