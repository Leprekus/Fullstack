'use client'
import { Product } from '@/types'
import Currency from './ui/currency'
import Button from './ui/Button'
import { ShoppingCart } from 'lucide-react'
import useCart from '@/hooks/use-cart'

interface InfoProps {
    data: Product
}
export default function Info({ data }: InfoProps) {
    const cart = useCart()
  return (
    <div>
        <h1 className='text-3xl font-bold text-gray-900'>
            { data.name 
        }</h1>
        <div className='mt-3 flex items-end justify-between'>
            <p className='text-2xl text-gray-900'>
                <Currency value={data.price}/>
            </p>
        </div>
        <hr  className='my-4'/>
        <div className='flex flex-col gap-y-6'>
            <div className='flex items-center gap-x-4'>
                <h3 className='font-semibold text-black'>
                    Size
                </h3>
                <div>
                    { data.size.name}
                </div>
            </div>
            <div className='flex items-center gap-x-4'>
                <h3 className='font-semibold text-black'>
                    Color
                </h3>
                
                <div className='h-6 w-6 rounded-full border-2 border-zinc-200'
                style={{ backgroundColor: data.color.value }} 
                />
                    
            </div>
            <div className='mt-10 flex items-center gap-x-3'>
                <Button 
                    onClick={() => cart.addItem(data)}
                    className='flex items-center gap-x-2 px-6 py-4'>
                    Add To Cart
                    <ShoppingCart/>
                </Button>
            </div>
        </div>
    </div>
  )
}