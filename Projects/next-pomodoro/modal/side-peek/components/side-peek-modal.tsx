import EditableElement from '@/components/editable-element';
import List from '@/components/ui/list';
import { useSidePeekStore } from '@/stores/side-peek-modal-store';
import { AnimatePresence, motion } from 'framer-motion';
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

    const focusCurrent = (e:React.MouseEvent<HTMLDivElement>) => {
        if (currentRef) {
            currentRef.current?.focus()
        }
    }

    const assignRef = (elementRef: React.MutableRefObject<HTMLDivElement | null>) => {
        if(elementRef) {
            currentRef = elementRef
        }
    }
    
    return (
        <AnimatePresence>
            {display &&
            <motion.div
            initial={{ opacity: 0  }}
            animate={{ opacity: 100 }}
            exit={{ translateX: 430 }}
            className='absolute top-0 z-10 right-0 w-[430px] min-h-screen border-l shadow-md  overflow-y-scroll'>
                <div className='min-w-full min-h-screen  pointer-events-auto bg-white'> {/*sheet*/}
                    <SidePeakHeader/>
                    <div
                    onClick={focusCurrent} className='mx-auto w-96 h-96 mt-11'>{/*paper*/}
        
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
            </motion.div>}
        </AnimatePresence>
    )
}

