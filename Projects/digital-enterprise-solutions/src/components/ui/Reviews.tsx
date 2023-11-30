import React from 'react'
import { ArrowLeft, ArrowRight } from '../icons'
import Carousel from '../Carousel'

export default function Reviews() {
    const children = [
        <div key={1}
        className='w-full h-full text-white rounded-md overflow-hidden flex items-center justify-between'
        >
                <div className='flex flex-col h-full justify-between'>
                    <p className='bg-gradient-to-r from-purple-950 to-transparent text-purple-600  text-xs w-fit py-1 px-2 rounded-md'>Place</p>
                    <p className='font-semibold'>Company</p>
                    <p className='text-xs'>(icon) schedule (icon) phone</p>
                </div>
                <div className='w-[72px] h-[72px] bg-gray-400 rounded-md'/>
        </div>,
        <div key={2}
        className='w-full h-full text-white rounded-md overflow-hidden flex items-center justify-between'
        >
                <div className='flex flex-col h-full gap-2'>
                    <p className='bg-gradient-to-r from-purple-950 to-transparent text-purple-600  text-xs w-fit py-1 px-2 rounded-md'>Review</p>
                    <div className='ml-4 flex gap-2 items-center'>
                        <p className='font-semibold'>User 1</p>
                        <p className='text-xs'>★★★★☆</p>
                    </div>
                </div>
                <div className='w-[72px] h-[72px] bg-gray-400 rounded-md'/>
        </div>,
         <div key={2}
         className='w-full h-full text-white rounded-md overflow-hidden flex items-center justify-between'
         >
                 <div className='flex flex-col h-full gap-2'>
                     <p className='bg-gradient-to-r from-purple-950 to-transparent text-purple-600  text-xs w-fit py-1 px-2 rounded-md'>Review</p>
                     <div className='ml-4 flex gap-2 items-center'>
                         <p className='font-semibold'>User 2</p>
                         <p className='text-xs'>★★★★★</p>
                     </div>
                 </div>
                 <div className='w-[72px] h-[72px] bg-gray-400 rounded-md'/>
         </div>,
    ]
  return (
    <div className="w-[360px] h-28 border border-slate-800 rounded-md">
        <Carousel
        next={<ArrowRight height={15} width={15} fill="white"/>}
        previous={<ArrowLeft height={15} width={15} fill="white"/>}
        childrenArray={children}
        />
    </div>
  )
}
