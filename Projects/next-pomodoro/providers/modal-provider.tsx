'use client'
import SidePeekModal from '@/modal/components/side-peek-modal';
import { useEffect, useState } from 'react';

export default function ModalProvider() {
    
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() =>{ setIsMounted(true) }, [])

    if(!isMounted) return null

    return (
    <>
        <SidePeekModal/>
    </>
    )
}