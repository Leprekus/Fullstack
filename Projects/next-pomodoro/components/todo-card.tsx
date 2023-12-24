import { GripVertical, Plus } from 'lucide-react'
interface TodoCardProps {
    handleOnClick: () => void;

}
export default function TodoCard({ handleOnClick }: TodoCardProps) {
    return (
        <div className='flex group'>
            <div className='group-hover:opacity-100 flex text-gray-400 opacity-0 transition'>
                <Plus
                onClick={() => handleOnClick()}
                size={20}
                className='transition p-0.5 rounded-[2px] hover:bg-gray-100'
                />
                <GripVertical size={20} className='transition p-0.5 rounded-[2px] hover:bg-gray-100'/>
            </div>
            <div className='w-96 h-56 border b-gray-400 rounded-md'>
            
            </div>
        </div>
    )
}