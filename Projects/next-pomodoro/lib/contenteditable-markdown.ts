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

export class ContentEditableMarkdown {
    id: string;
    div: HTMLDivElement;
    parent: HTMLDivElement;
    isProcessed: boolean;
    private static instance: ContentEditableMarkdown;

    constructor(id: string, parent: HTMLDivElement) {

        this.id = id;
        this.div = document.createElement('div')
        this.parent = parent;
        this.isProcessed = false;

    }

    public static getInstance (id: string, parent: HTMLDivElement): ContentEditableMarkdown {
        if(
            !ContentEditableMarkdown.instance ||
            ContentEditableMarkdown.instance.id !== id
        ) {
            ContentEditableMarkdown.instance = new ContentEditableMarkdown(id, parent)
        }

        return ContentEditableMarkdown.instance
    }

    private getIdentifier = (text: string): Identifier | undefined =>{
        let result: Identifier | undefined  = undefined
        Object.keys(IDENTIFIERS).forEach(key => {
            const identifier: Identifier = IDENTIFIERS[key as IdentifierKey]
            if(!text.startsWith(identifier)) return
                //processBlock(identifier, text)
                result = identifier
                this.isProcessed = true;
            
        })
    
        return result
    }

    private createHTMLHelper = <T>(el: T) => {
            this.div.textContent = ''
            const element = el as HTMLElement
            element.setAttribute('contenteditable', 'true')
            this.div.appendChild(element)
            element.focus()
        }

    private createHTMLElementForIdentifier = (identifier: Identifier) => {
        
        if (!this.parent) return
    
        switch(identifier) {
            case IDENTIFIERS.HEADING_1:
            case IDENTIFIERS.HEADING_1_NBS:
                const h1 = document.createElement('h1')
                h1.className = 'editable-h1'
                this.createHTMLHelper<HTMLHeadingElement>(h1)
                break;

            case IDENTIFIERS.HEADING_2:
            case IDENTIFIERS.HEADING_2_NBS:
                const h2 = document.createElement('h2')
                h2.className = 'editable-h2'
                this.createHTMLHelper(h2)
                break;

            case IDENTIFIERS.HEADING_3:
            case IDENTIFIERS.HEADING_3_NBS:
                const h3 = document.createElement('h3')

                h3.className = 'editable-h3'
                this.createHTMLHelper(h3)
                break;

                case IDENTIFIERS.BULLET_LIST_1:
                case IDENTIFIERS.BULLET_LIST_1_NBS:

                case IDENTIFIERS.BULLET_LIST_2:
                case IDENTIFIERS.BULLET_LIST_2_NBS:
                    //const ul = document.createElement('ul')
                    const li = document.createElement('li')
    
                    //ul.className = 'list-inside'
                    li.className = 'list-disc'
    
                    //ul.appendChild(li)
                    this.createHTMLHelper(li)
                    break;
            }


        }

        private resetToOriginalState = () => {
            this.div.textContent = ''
            this.div.innerHTML = ''
            this.isProcessed = false
        }

        private processEvent = (e: any) => {
    
            const text = e.currentTarget.textContent
            if(text === '') this.resetToOriginalState()
            if(this.isProcessed) return
            const identifier = this.getIdentifier(text)
            if(identifier) this.createHTMLElementForIdentifier(identifier)
        }

        render (): HTMLDivElement {

            this.div.setAttribute('contenteditable', 'true')
            this.div.addEventListener('input', this.processEvent)
            this.div.className = 'outline-none text-sm'
            this.div.textContent = ''
            this.parent.appendChild(this.div)
            this.div.focus()
            return this.div
            
        }
}