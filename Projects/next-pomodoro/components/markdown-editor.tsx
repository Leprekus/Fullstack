'use client'
import React, { HTMLAttributes, forwardRef, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface DivProps extends HTMLAttributes<HTMLDivElement> {}
//regular space is ascii 32
//NBS = Non-Breaking-Space ascii 160 (\xa0)
const IDENTIFIERS = {
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
const MarkdownEditor = forwardRef<HTMLDivElement, DivProps>(({
    className,
    children,
    ...props
}, ref) => {

    useEffect(() =>{},[])

    const [text, setText] = useState('')
    const [JSX, setJSX] = useState<React.JSX.Element>(<></>)

    const parse = () =>{
        Object.keys(IDENTIFIERS).forEach(key => {
            const identifier: Identifier = IDENTIFIERS[key as IdentifierKey]
            //TODO: remove log
            console.log({
                identifier,
                text,
                textCodePoint: text.codePointAt(1),
                identifierCodePoint: identifier.codePointAt(1),
                match:text.startsWith(identifier)})
            if(text.startsWith(identifier)) {
                processBlock(identifier)
            }
        })
    }

    const processBlock = (identifier: Identifier) =>{
        switch(identifier) {
            case IDENTIFIERS.BULLET_LIST_2_NBS:
                console.log("matched")
                const newText = text.slice(0, 2)

                const newJSX = <ul><li>{newText}</li></ul>
                setJSX(newJSX)
                console.log({ text })
                break;
            
        }

    }
    const processText = (e: React.FormEvent<HTMLDivElement>) =>{
        if(e.currentTarget.textContent) {
            setText(e.currentTarget.textContent)
            parse()
        }
    }
    return <div
    className={twMerge(``, className)}
    onKeyDown={processText}
    ref={ref}
    {...props}
    >
        { JSX }
    </div>
})

MarkdownEditor.displayName = 'MarkdownEditor'

export default MarkdownEditor