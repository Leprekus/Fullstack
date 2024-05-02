'use client';

import Link from 'next/link';
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
export default function Button({ children, className='', onClick, variant='secondary', disabled=false, type }: {children: string | ReactNode, className?: string, onClick?: Function, variant?: 'secondary' | 'primary' | 'tertiary' | 'ghost', disabled?: boolean, type?: "button" | "submit" | "reset" | undefined }) {
    let style = ''
    if(variant === 'secondary') style = ' text-blue-500 hover:bg-blue-100 px-4 py-2'
    if(variant === 'ghost') style = 'hover:bg-slate-200 hover:bg-opacity-50 p-1'
    if(disabled) return (
      <div 
      className={'uppercase transition-all px-4 py-2 rounded-md text-gray-300 hover:cursor-not-allowed'}>{children}</div>
  
    )
    return (
    <button 
    type={type}
    onClick={() => onClick && onClick()}
    className={'uppercase transition-all rounded-md ' + style + ' ' + className}>{children}</button>
  )
}

export const LinkWrapper = ({ href, target, children, variant, padding=true, className }: {className?:string, padding?: boolean, href: string, target?: string, children: string | ReactNode , variant?: 'ghost' }) => {
  let style = ''
  if(variant === 'ghost') style = 'hover:bg-slate-200 hover:bg-opacity-50'
  return (
    <Link 
    className={twMerge(`${style} ${padding ? 'px-4 py-2' : ''} rounded-md uppercase transition-all`, className)}
    target={target} href={href}>{ children }</Link>
  )
}
