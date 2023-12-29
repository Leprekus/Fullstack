import EditableElement from '@/components/editable-element';
import List from '@/components/ui/list';
import { useSidePeekStore } from '@/modal/side-peek/side-peek-modal';
import SidePeakHeader from './side-peek-header';

/**
 * structure:
 * <div> conatiner: creates a block containing all of the elements (contains container-specific options)
 *  <div></div>element: element (contains element-specific options)
 * </div>
 */
export default function SidePeekModal() {
    const display = useSidePeekStore(state => state.display)

    let currentRef: React.MutableRefObject<HTMLDivElement | null> | null = null
    if(!display) return null

    const focusCurrent = (e:React.MouseEvent<HTMLDivElement>) => {
        if (currentRef)
            currentRef.current?.focus()
    }

    const assignRef = (elementRef: React.MutableRefObject<HTMLDivElement | null>) => {
        if(elementRef) {
            currentRef = elementRef
            console.log('assigned')
        }
    }
    //TODO: add animations
    return (
        <div className='absolute top-0 right-0 z-10 w-[430px] min-h-screen border-l shadow-md'>
            <div className='min-w-full min-h-screen  pointer-events-auto bg-white'> {/*sheet*/}
                <SidePeakHeader/>
                <div onClick={focusCurrent} className='mx-auto w-96 h-96'>{/*paper*/}
    
                    <List
                    fill={1}
                    Component={
                        <EditableElement
                        assignRef={assignRef}
                        currentRef={currentRef}
                        />
                    }/>
                </div>
            </div>
        </div>

        

    )
}

