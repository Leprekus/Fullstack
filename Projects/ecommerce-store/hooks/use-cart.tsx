'use client'
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product } from '@/types';
import toast, { Toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface CartStore {
    items: Product[],
    addItem: (data: Product) => void,
    removeItem: (id: string) => void,
    removeAll:() => void,
    

}

const useCart = create(
    persist<CartStore>((set, get) =>({
        items: [],
        addItem: (data: Product) => {
            const currentItems = get().items
            const existingItem = currentItems.find(item => item.id === data.id)

            return existingItem ?
            toast('Item already in cart') :
            (
                set({ items: [ ...currentItems, data ]}),
                toast('Added to Cart', { icon: 
                <Link 
                    style={{ color: 'rgb(59 130 246)' }}
                    className='
                    font-xs 
                    font-sans 
                    font-bold 
                    rounded-md
                    p-2
                    '
                    href='/cart'
                >
                        View
                    </Link> })
            )
        },
        removeItem: (id: string) => {
            const filteredItems = get().items.filter(item => item.id !== id)
            set({ items: [ ...filteredItems ] })
            toast.success('Item removed')
        },
        removeAll:() => set({ items: [] }),
    }), {
        name: 'cart-storage',
        storage: createJSONStorage(() => localStorage)
    })
)

export default useCart