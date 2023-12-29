import { useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { ContentEditableMarkdown } from '@/lib/contenteditable-markdown';
import CommandsMenuModal from '@/modal/commands-menu-modal/components/commands-menu-modal';
import { useCommandsMenuStore } from '@/modal/commands-menu-modal/commands-modal';

interface EditableElementProps {
    assignRef: (
        currentRef: React.MutableRefObject<HTMLDivElement | null>,
    ) => void;
    currentRef: React.MutableRefObject<HTMLDivElement | null> | null;
}
export default function EditableElement({
    assignRef,
    currentRef,
}: EditableElementProps) {
    const elementRef = useRef<HTMLDivElement | null>(null);
    const [id] = useState(uuid());
    useEffect(() => {
        if (currentRef === null) {
            assignRef(elementRef);
        }
    }, []);

    const [rendered, setRendered] = useState(false);
    const toggleCommandMenu = useCommandsMenuStore(state => state.toggle)
    useEffect(() => {
        const toggleMenu = (e: KeyboardEvent) => {
            if (e.key === '/') toggleCommandMenu()
        };
        document.addEventListener('keydown', toggleMenu);
        if (elementRef?.current && !rendered) {
            setRendered(true);
            const contentEditable = new ContentEditableMarkdown(
                id,
                elementRef.current,
            );
            contentEditable.render();
        }

        return () => document.removeEventListener('keydown', toggleMenu);
    }, [elementRef?.current]);

    return (
        <>
            <CommandsMenuModal />
            <div
                id={id}
                className="p-2 transition-all hover:bg-gray-50 rounded-md cursor-text min-w-full text-sm"
                ref={elementRef}
            />
        </>
    );
}
