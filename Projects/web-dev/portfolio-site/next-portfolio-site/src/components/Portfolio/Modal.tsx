'use client';
import React, { ReactNode, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';

export default function Modal({
  children,
  isOpen,
  onChange,
}: {
  children: ReactNode;
  isOpen: boolean;
  onChange: Function;
}) {
  //removes body's scrollability when popup is open
  // useEffect(() => {
  //   document.body.classList.add('popup-open');
  //   return () => {
  //     console.log('called');
  //     document.body.classList.remove('popup-open');
  //   };
  // }, []);

  const handleClick = (event: React.MouseEvent) => onChange();
  return isOpen ? (
    <div onClick={handleClick} className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-80" />
      <button className="z-10 absolute right-4 top-2 w-6 h-6">
        <AiOutlineClose fill="#FFF" size={23}/>
      </button>
      <motion.div
        animate={{ opacity: 100, y: 0 }}
        initial={{ opacity: 70, y: 25 }}
        className="absolute inset-0 bg-white mt-10 rounded-t-xl overflow-y-scroll"
      >
        {children}
      </motion.div>
    </div>
  ) : null;
}
