'use client'
import { ChevronsRight } from 'lucide-react'
import { useSidePeekStore } from '../side-peek-modal'
export default function SidePeakHeader() {
    const toggleSidePeek = useSidePeekStore(state => state.toggle)
  return (
    <div className='flex items-center h-11 px-2 fixed top-0 min-w-full bg-white'>
        <ChevronsRight className='text-gray-400 cursor-pointer p-0.5 hover:bg-gray-100 rounded-[2px]' onClick={toggleSidePeek}/>
    </div>
  )
}