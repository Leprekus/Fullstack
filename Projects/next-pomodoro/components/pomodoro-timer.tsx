import Button from './ui/button';
import { Play } from 'lucide-react';
import ButtonGroup from './ui/button-group';

export default function PomodoroTimer() {

  return (
    <div className='w-96 h-96'>
        <div className='w-fit mx-auto'>
            <ButtonGroup>
                <Button className='text-gray-700'>Session</Button>
                <Button className='text-gray-700'>Rest</Button>
                <Button className='text-gray-700'>Cooldown</Button>
            </ButtonGroup>
        </div>
        <p className='font-mono text-gray-700 text-6xl w-fit mx-auto'>
            00:00
        </p>
        <Button className='w-full py-4 flex justify-center'>
            <Play fill='rgb(156 163 175)'/>
        </Button>
    </div>
  )
}