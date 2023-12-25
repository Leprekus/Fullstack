import { GripVertical, Plus, PenLine, MoreHorizontal } from 'lucide-react';

import ButtonGroup from '../button-group';
import { useSidePeekStore } from '@/modal/side-peek-modal';
interface TodoCardProps {
    handleOnClick: () => void;

}
export default function TodoCard({ handleOnClick }: TodoCardProps) {
    const toggleSidePeek = useSidePeekStore(state => state.toggle)

    return (
        <div className="flex group items-center">
            <div className="group-hover:opacity-100 flex text-gray-400 opacity-0 transition">
                <Plus
                    onClick={handleOnClick}
                    size={20}
                    className="cursor-pointer p-0.5 rounded-[2px] hover:bg-gray-100"
                />
                <GripVertical
                    size={20}
                    className="cursor-grab active:cursor-grabbing p-0.5 rounded-[2px] hover:bg-gray-100"
                />
            </div>
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
        </div>
    );
}
