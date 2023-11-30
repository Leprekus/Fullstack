'use client'

import Link from './ui/link'
import { usePathname } from 'next/navigation'
import AuthUser from './auth-user'

export default function Navigation() {
  const pathname = usePathname()
  const routes = [
   {
    href: '/',
    label: 'Home'
    },
   {
    href: '/services',
    label: 'Services'
    },
   {
    href: '/portfolio',
    label: 'Portfolio'
    },
   {
    href: '/contact',
    label: 'Contact'
    },
  ]
  
  
  return (
    <nav className='w-full'>
       <div className='ml-auto w-fit space-x-4 pr-4 pb-4'>
        <AuthUser/>
       </div>
       <div className='w-fit space-x-4 ml-auto pr-10'>
         {routes.map(route => (
            <Link
              key={route.href}
              href={route.href}
              variant='ghost'
              className={`${pathname === route.href && 'bg-accent'}`}
            >
              { route.label }
            </Link>
         ))}
       </div>
    </nav>
  )
}