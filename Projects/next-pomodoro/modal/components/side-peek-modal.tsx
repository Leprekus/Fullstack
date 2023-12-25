import { useSidePeekStore } from '@/modal/side-peek-modal'
import SidePeakHeader from './side-peek-header';

/**
 * structure:
 * <div> creates a block containing all of the elements (contains container-specific options)
 *  <div></div> element (contains element-specific options)
 * </div>
 */
export default function SidePeekModal() {
    const display = useSidePeekStore(state => state.display)

    if(!display) return null
    return (
        <div className='absolute top-0 right-0 w-[430px] min-h-full'>
            <div className='absolute top-0 right-0 w-[430px] h-full'>
                <SidePeakHeader/>
                <div contentEditable></div>
            </div>


        </div>

    )
}

