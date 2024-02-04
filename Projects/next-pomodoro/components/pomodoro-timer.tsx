
'use client'
import Button from './ui/button';
import { Pause, Play } from 'lucide-react';
import ButtonGroup from './ui/button-group';
import { usePomodoroStore } from '@/stores/pomodoro-store';
import { useEffect, useState } from 'react';

const formatTime = (ms: number) => {
    ms - 1000
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    
    // Pad single-digit seconds with a leading zero
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${formattedSeconds}`;
}


export default function PomodoroTimer() {
    
    
    const pomodoroStore = usePomodoroStore()
    const [time, setTime] = useState(formatTime(pomodoroStore.session.duration))
    const [active, setActive] = useState<1|2|3>(1)
    const [isPaused, setIsPaused] = useState(true)
    
    useEffect(() => {
        let id: NodeJS.Timeout;
        if(!isPaused)
            id = setInterval(() => {
                setTime((prevTime) => {
                    const [minutes, seconds] = prevTime.split(":").map(Number);
                    const totalMilliseconds = minutes * 60 * 1000 + seconds * 1000;
                    const newTime = totalMilliseconds - 1000;

                    if (newTime <= 0) {
                        setIsPaused(true);
                        // Handle logic when time reaches zero (e.g., switch to next phase)
                    }

                    // Convert back to "mm:ss" format
                    const newMinutes = Math.floor(newTime / 60000);
                    const newSeconds = Math.floor((newTime % 60000) / 1000);
                    const formattedSeconds = newSeconds < 10 ? `0${newSeconds}` : newSeconds;

                    return `${newMinutes}:${formattedSeconds}`;
                });
            }, 1000)

        return () => clearInterval(id)

    },[ isPaused ])

    const changeTime = (ms: number, section: 1 | 2 | 3) => {
        const format = formatTime(ms)
        setTime(format)
        setActive(section)
        setIsPaused(true)
    }

    return (
    <div className='w-96 h-96 flex items-center flex-col gap-y-10'>
        <div className='w-fit'>
            <ButtonGroup>
                <Button onClick={() => changeTime(pomodoroStore.session.duration, 1)}className={`text-gray-700 ${active === 1 && 'bg-gray-100'}`}>Session</Button>
                <Button onClick={() => changeTime(pomodoroStore.rest.duration, 2)}className={`text-gray-700 ${active === 2 && 'bg-gray-100'}`}>Rest</Button>
                <Button onClick={() => changeTime(pomodoroStore.cooldown.duration, 3)}className={`text-gray-700 ${active === 3 && 'bg-gray-100'}`}>Cooldown</Button>
            </ButtonGroup>
        </div>
        <p className='font-mono text-gray-700 text-6xl w-fit'>
            {time}
        </p>
        <Button className='w-full py-4 flex justify-center'
            onClick={() => setIsPaused(!isPaused)}
        >
            {isPaused ? <Play fill='rgb(156 163 175)'/>: <Pause fill='rgb(156 163 175)'/>  }
        </Button>
    </div>
  )
}