'use client'

import Button from '@/components/ui/Button';
import IconButton from '@/components/ui/icon-button';
import { Color, Size } from '@/types'
import { Dialog } from '@headlessui/react';
import { Plus, X } from 'lucide-react';
import { useState } from 'react';
import Filter from './Filter';

interface MobileFilterProps {
    sizes: Size[];
    colors: Color[]
}
export default function MobileFilters({
    sizes,
    colors,
}: MobileFilterProps) {
    const [isOpen, setIsOpen] = useState(false)

    const Open = () => setIsOpen(true)
    const Close = () =>  setIsOpen(false)

  return (
    <>
        <Button
            onClick={Open}
            className='flex items-center gap-x-2 lg:hidden px-4 py-2'
        >
            Filters
            <Plus size={20} strokeWidth={4}/>
        </Button>
        <Dialog
            open={isOpen}
            onClose={Close}
            as='div'
            className='
                relative
                z-40
                lg:hidden
            '
        >
            <div className='
                fixed 
                inset-0
                bg-black
                bg-opacity-25
            '
            />
            <div className='fixed inset-0 z-40 flex'>
                <Dialog.Panel
                className='
                    relative
                    ml-auto
                    flex
                    h-full
                    w-full
                    max-w-xs
                    flex-col
                    overflow-y-auto
                    bg-white
                    py-4
                    pb-6
                    shadow-xl
                ' >
                    <div
                        className='
                            flex
                            items-center
                            justify-end
                            px-4
                        '
                    >
                        <IconButton 
                        icon={
                            <X 
                            onClick={Close}
                            size={15}/>
                        }/>
                    </div>
                    <div 
                    className='
                        p-4
                    '
                    >
                        <Filter 
                            valueKey='sizeId'
                            name='Size'
                            data={sizes}
                        />
                        <Filter 
                            valueKey='colorId'
                            name='Color'
                            data={colors}
                        />
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    </>
  )
}