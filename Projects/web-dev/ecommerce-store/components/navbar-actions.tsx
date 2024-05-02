'use client'

import useIsMounted from '@/hooks/use-is-mounted'
import { ShoppingBag } from 'lucide-react'
import Button from './ui/Button'
import useCart from '@/hooks/use-cart'
import { useRouter } from 'next/navigation'
export default function NavbarActions() {

  const isMounted = useIsMounted()
  const cart = useCart()
  const router = useRouter()
  if(!isMounted) return null
  
  return (
    <div className='ml-auto flex items-center gap-x-4'>
        <Button 
        onClick={() => router.push('/cart')}
        className='flex items-center rounded-lg bg-black px-4 py-2'>
            <ShoppingBag
              size={20}
              color='white'
            />
            <span className='ml-2 text-sm font-medium text-white'>
              { cart.items.length }
            </span>
        </Button>
    </div>
  )
}