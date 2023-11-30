'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

export function NavButton({ href, children }: { href: string, children: ReactNode | string }) {
    return (
        <Link 
        className='
         hover:bg-opacity-5 hover:bg-pink-600
         active:bg-opacity-10 px-4 py-2 rounded-md mx-1'
        href={href}>
            {children}
        </Link>
    )

}