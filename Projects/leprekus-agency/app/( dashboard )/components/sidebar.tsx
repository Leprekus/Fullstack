import { type ReactNode } from 'react'
import { CalendarRange, Target } from 'lucide-react'
import Link from '@/components/ui/link'
export default function Sidebar({
    children
}: {
    children: ReactNode
}) {

    const routes = [
        {
            href: 'appointments',
            label: 'Appointments',
            icon: <CalendarRange size={20}/>
        },
        {
            href: 'projects',
            label: 'Projects',
            icon: <Target size={20}/>
        },
    ]
  return (
    <div
        className='pl-48'
    >
        <div 
            className='
                w-48
                bg-muted
                absolute
                top-0
                left-0
                bottom-0
            '
        >
            {
                routes.map(({ href, label, icon }) => (
                    <Link 
                        key={href}
                        href={`/dashboard/${href}`}
                        className='
                        w-full 
                        hover:bg-gray-200/70
                        active:bg-gray-200
                        flex 
                        justify-between
                        text-gray-700 hover:text-gray-700
                        h-14
                        font-semibold
                        '
                        variant='ghost'
                    >
                        { label }
                        { icon }
                    </Link>
                ))
            }
        </div>
        { children }
    </div>
  )
}