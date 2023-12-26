import { useEffect, useRef } from 'react';
import MarkdownEditor from '../markdown-editor';

interface EditableElementProps {
    assignRef: (currentRef: React.MutableRefObject<HTMLDivElement | null>)=> void;
    currentRef: React.MutableRefObject<HTMLDivElement | null> | null

}
export default function EditableElement({ assignRef, currentRef }: EditableElementProps) {
    const elementRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        if(currentRef === null) {
            assignRef(elementRef)
        }
    },[])
    
    return (
        <div
            onMouseOver={() => assignRef(elementRef)}
            className="p-2 transition-all hover:bg-gray-50 rounded-md cursor-text min-w-full"
        >{/*container*/}
            <MarkdownEditor
                ref={elementRef}
                autoFocus
                contentEditable
                className="outline-none text-sm"
            >{/*element*/}
            </MarkdownEditor>
        </div>
    );
}
