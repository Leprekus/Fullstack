'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { NavButton } from './Buttons';
import HamburgerMenu from './hamburger-menu';
import navItems from '@/app/(blog)/navItems';

export default function BlogNavbar() {

  const [burgerMenuPos, setBurgerMenuPos] = useState('');
  const [transformX, setTransformX] = useState({});
  const [transformY, setTransformY] = useState({});
  const [navMenuPos, setNavMenuPos] = useState('-translate-x-72');
  const handleMenuToggle = () => {
    if (burgerMenuPos === 'translate-x-64') {
      setBurgerMenuPos('');
      setNavMenuPos('-translate-x-72');

      setTransformX({});
      setTransformY({});
    } else {
      setBurgerMenuPos('translate-x-64');
      setNavMenuPos('');

      setTransformX({ transform: 'rotate(45deg)', top: 5 });
      setTransformY({ transform: 'rotate(-45deg)', bottom: 4 });
    }
  };
  return (
    <>
      {/* Burger menu */}
      
      <HamburgerMenu
      onClick={handleMenuToggle}
      translate={burgerMenuPos}
      transformX={transformX}
      transformY={transformY}
      />
      <nav
        className={`w-64 transition-all ${navMenuPos}
        border-r-2 border-[#1d202c] absolute top-0 min-h-screen
        sm:w-full sm:relative sm:translate-x-0
        sm:min-h-fit sm:p-2
        flex flex-col justify-between
        sm:flex-row sm:items-center`}
      >
        <div className='flex flex-col sm:flex-row'>
          {navItems.map((item, i) => (
            <NavButton
              key={i}
              href={item.href}
             
            >
              {item.title}
            </NavButton>
          ))}
        </div>
        {/* <Image
          className='m-4'
          src='/logo.png'
          width={32}
          height={32}
          alt='logo'
        /> */}
      </nav>
    </>
  );
}