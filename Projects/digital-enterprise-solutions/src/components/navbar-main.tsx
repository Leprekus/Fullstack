import React from 'react'
import Button from './ui/Button'
import { navItems } from '~/utils/items'
import Link from 'next/link'

export default function NavbarMain() {
  return (
    <nav className='h-20 bg-glass flex justify-between items-end w-full max-w-7xl fixed inset-x-02 mx-auto border-b border-[#636363] z-20'>
        <div className='text-white pb-1'>Logo</div>
        <div className='pb-1 pr-1 flex'>
          {navItems.map((item, i) =>
          <Link className='hover:bg-[#333333] text-[#636363] hover:text-white transition-all py-2 px-4 rounded-md' 
          href={item.link} key={i}>{item.name}</Link>)}
        </div>
    </nav>
  )
}
