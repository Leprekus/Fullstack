import React, { type ReactNode } from 'react'

export default function Button({ variant='primary', children }: { variant?: 'primary' | 'secondary' | 'ghost', children: ReactNode | string }) {

    let style = ''
    switch(variant) {
        case 'primary':
            style = 'bg-black text-white tracking-tight'
            break;
        case 'secondary':
            style = 'bg-white text-black border border-black tracking-tight'
            break;
        case 'ghost':
            style = 'hover:bg-[#333333] text-[#636363] hover:text-white'
            break;

    }
    const master = 'transition-all py-2 px-4 rounded-md'
  return (
    <button className={master + ' ' + style}>{ children }</button>
  )
}
