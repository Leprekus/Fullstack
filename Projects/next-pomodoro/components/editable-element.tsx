import { useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid'
import { ContentEditableMarkdown } from '@/lib/contenteditable-markdown';

interface EditableElementProps {
    assignRef: (currentRef: React.MutableRefObject<HTMLDivElement | null>)=> void;
    currentRef: React.MutableRefObject<HTMLDivElement | null> | null

}
export default function EditableElement({ assignRef, currentRef }: EditableElementProps) {
    const elementRef = useRef<HTMLDivElement | null>(null)
    const [ id ] = useState(uuid())
    useEffect(() => {
        if(currentRef === null) {
            assignRef(elementRef)
        }
    },[])
    
    const [rendered, setRendered] = useState(false)
    useEffect(() => {
        const toggleMenu = (e: KeyboardEvent) => {
            if(e.key === '/') console.log('menu actioned')
        }
        document.addEventListener('keydown', toggleMenu)
        if(elementRef?.current && !rendered) {
            setRendered(true)
            const contentEditable = new ContentEditableMarkdown(id, elementRef.current)
            contentEditable.render()
        }

        return () => document.removeEventListener('keydown', toggleMenu)
    },[elementRef?.current])
    
    return (
        <>
            
            <div
                id={id}
                className="p-2 transition-all hover:bg-gray-50 rounded-md cursor-text min-w-full text-xl"
                ref={elementRef}

            />
        </>
    );
}
