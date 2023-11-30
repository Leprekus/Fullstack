'use client'

import useIsMounted from '@/hooks/use-is-mounted'

export const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
  
interface CurrencyProps { value?: string | number }

export default function Currency({ value }: CurrencyProps) {
    const isMounted = useIsMounted()

    if(!isMounted) return null
  return (
    <div className='font-semibold'>
        { priceFormatter.format(Number(value)) }
    </div>
  )
}