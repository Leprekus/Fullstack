'use client'
import { ChevronsRight } from 'lucide-react'
import { useSidePeekStore } from '../side-peek-modal'
export default function SidePeakHeader() {
    const toggleSidePeek = useSidePeekStore(state => state.toggle)
  return (
    <div className='flex items-center h-10 px-2'>
        <ChevronsRight className='text-gray-400 cursor-pointer p-0.5 hover:bg-gray-100 rounded-[2px]' onClick={toggleSidePeek}/>
    </div>
  )
}