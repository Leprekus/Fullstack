'use client'
import React, { HTMLAttributes, ReactNode, forwardRef, useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
interface DivProps extends HTMLAttributes<HTMLDivElement> {}
//regular space is ascii 32
//NBS = Non-Breaking-Space ascii 160 (\xa0)
const IDENTIFIERS = { //longest identfier is 4 chars long
    HEADING_1: '# ',
    HEADING_2: '## ',
    HEADING_3: '### ',
    BULLET_LIST_1: '- ',
    BULLET_LIST_2: '* ',

    HEADING_1_NBS: '#\xa0',
    HEADING_2_NBS: '##\xa0',
    HEADING_3_NBS: '###\xa0',
    BULLET_LIST_1_NBS: '-\xa0',
    BULLET_LIST_2_NBS: '*\xa0',

    
} as const

type IdentifierKey = keyof typeof IDENTIFIERS //Object.values() at type level
type Identifier = (typeof IDENTIFIERS)[keyof typeof IDENTIFIERS] //Object.values() at type level
/**
 * //TODO: implement Myers Diff algorithm
 * check for diff: edit only content that changed
 *  - resource 1: http://www.xmailserver.org/diff2.pdf
 *  - resource 2: https://blog.jcoglan.com/2017/02/12/the-myers-diff-algorithm-part-1/
 */
/**
 * //TODO: recursively check for indents
 * indented blocks will nest inside parent
 */

/**
 * Rules:
 * '\n' create an entire new block
 * Block only gets converted into markdown if element BEGINS with a md identifier
 * Blocks CAN be nested
 * Otherwise gets treated as a text-block
 */

interface FormattedElementProps {
    children: ReactNode,
    identifier: Identifier | undefined
}
const FormattedElement = ({
    children,
    identifier,
}: FormattedElementProps) => {

    const [isAlive, setIsAlive] = useState(true)
    const target = useRef(null)
    const config = { attributes: true, childList: true, subtree: true };
    const callback = (
        mutationList: MutationRecord[],
        observer: MutationObserver
        ) => {
        for (const mutation of mutationList) {
    
            if (mutation.type === "childList" && mutation.removedNodes.length > 0) {
                console.log('unaliving', mutation.removedNodes)
                target.current = null
                setIsAlive(false)
            } else if (mutation.type === "attributes") {
            console.log(`The ${mutation.attributeName} attribute was modified.`);
            }
        }
    };

    useEffect(() =>{
        if(target?.current) {
            setIsAlive(true)
            const observer = new MutationObserver(callback)
            observer.observe(target.current, config)
        }

    },[callback, config])


    let renderedElement = null
    switch(identifier) {
        case IDENTIFIERS.BULLET_LIST_2_NBS:
            renderedElement = (
            <ul ref={target} className='list-inside'>
                <li className='list-disc list-item'>{children}</li>
            </ul>
            )
            break;
        
        default:
            renderedElement = (
                <div ref={target}>{children} and some text</div>
            )
            break;
        
        }

    return isAlive && renderedElement


}
const MarkdownEditor = forwardRef<HTMLDivElement, DivProps>(({
    className,
    children,
    ...props
}, ref) => {

    
    const [identifier, setIdentifier] = useState<Identifier | undefined>(undefined)
    const [isProcessed, setIsProcessed] = useState(false)

    const getIdentifier = (text: string): void =>{
        Object.keys(IDENTIFIERS).forEach(key => {
            const identifier: Identifier = IDENTIFIERS[key as IdentifierKey]
            //TODO: remove log
            if(text.startsWith(identifier)) {
                //processBlock(identifier, text)
                setIdentifier(identifier)
                setIsProcessed(true)
                return
            }
        })
        
    }

    const processText = (e: React.FormEvent<HTMLDivElement>) =>{
        console.log(e?.currentTarget?.textContent?.length, {isProcessed})
        if(isProcessed && e?.currentTarget?.textContent?.length === 0) {
            setIsProcessed(false)
            setIdentifier(undefined)
            return
        }
        if(isProcessed) return
    
        if(!e?.currentTarget?.textContent) return
        getIdentifier(e.currentTarget.textContent)
        if(identifier) createElementForIdentifier()

    }

    // return <div
    // className={twMerge(``, className)}
    // onInput={processText}
    // ref={ref}
    // {...props}
    // >
    //     <FormattedElement
    //         identifier={identifier}>
    //         {children}
    //     </FormattedElement>
        
    // </div>

    const [isAlive, setIsAlive] = useState(true)
    const [renderedElement, setRenderedElement] = useState<React.JSX.Element | null>(null)
    const target = useRef(null)
    const config = { attributes: true, childList: true, subtree: true };
    const callback = (
        mutationList: MutationRecord[],
        observer: MutationObserver
        ) => {
        for (const mutation of mutationList) {
    
            if (mutation.type === "childList" &&mutation.removedNodes.length > 0) {
                console.log('unaliving', mutation.removedNodes)

                setIsAlive(false)
            } else if (mutation.type === "attributes") {
            console.log(`The ${mutation.attributeName} attribute was modified.`);
            }
        }
    };

    useEffect(() =>{
        if(target?.current) {
            setIsAlive(true)
            const observer = new MutationObserver(callback)
            observer.observe(target.current, config)
        }

    },[callback, config])
const createElementForIdentifier = () => {
    switch(identifier) {
        case IDENTIFIERS.BULLET_LIST_2_NBS:
            setRenderedElement(
                <ul ref={target} className='list-inside'>
                    <li className='list-disc list-item'>{children}</li>
                </ul>
            )
            break;
        
        default:
            setRenderedElement( <div ref={target}>{children}</div> )
            break;
        
        }
    }

    return <div
    className={twMerge(``, className)}
    onInput={processText}
    ref={ref}
    {...props}
    >
    
        {
            isAlive &&
            renderedElement
        }
        
    </div>
})

MarkdownEditor.displayName = 'MarkdownEditor'

export default MarkdownEditor