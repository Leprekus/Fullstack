import { MoreHorizontal, PenLine } from 'lucide-react';

import { useSidePeekStore } from '@/stores/side-peek-modal-store';
import ButtonGroup from '../ui/button-group';
export default function TodoCard() {
    const toggleSidePeek = useSidePeekStore(state => state.toggle)

    return (
        <div className="w-96 h-14 border b-gray-400 rounded-md py-2 px-4 flex justify-between items-center">
            {/* title */}
            <input type="text" placeholder='Add a Title' className='outline-none'/>
            {/* body */}
            <ButtonGroup className='opacity-0 group-hover:opacity-100 transition'>
                <PenLine className='text-gray-500' size={16} onClick={toggleSidePeek}/>
                <MoreHorizontal className='text-gray-500' size={16} onClick={() =>{}}/>
            </ButtonGroup>
            {/* ?footer */}
        </div>

    );
}
