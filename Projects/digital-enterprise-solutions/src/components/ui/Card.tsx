import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, Refresh, Triangle } from '../icons'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import { datasets } from '~/utils/card-info';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
export default function Card() {
    const [display, setDisplay] = useState(false)
    const [displayRefresh, setDisplayRefresh] = useState(false)
    const [timeFrame, setTimeFrame] = useState('Today')
    const [dataType, setDataType] = useState('Impressions')
    const currentDataset = datasets[dataType]![timeFrame]!
    //const currentDataset = datasets[timeFrame]!
    const impressions = currentDataset.datasets[1]?.data.reduce((a, b):number => (a as number) + (b as number))
  
    //labels.map(() => Math.floor(Math.random() * (100000 - 20000 + 1) + 20000))
      

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: 'white', // Set x-axis label color to white
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              color: 'white', // Set y-axis label color to white
            },
          },
        },
      };
      
      const handleSelect = (timeFrame: string) => {
        setTimeFrame(timeFrame)
        setDisplay(!display)
      }
      const handleDisplay  = (menu: 'main' | 'secondary') => {
        switch(menu) {
          case 'main': 
          setDisplay(!display)
          setDisplayRefresh(false)
          break;
          case 'secondary': 
          setDisplay(false)
          setDisplayRefresh(!displayRefresh)
          break;

        }
      }
      const handleSelectDataset = (dataset: 'Impressions' | 'Clicks') => {
       setDataType(dataset)
       setDisplayRefresh(!displayRefresh)
      }
  return (
    <div className="w-[360px] h-[280px]  rounded-xl border border-slate-800 flex flex-col gap-0 p-2">
    {/* header */}
    <div className="flex justify-between items-center">
      <div className="flex gap-2">
        <div className="rounded-md h-10 w-10 bg-slate-400"/>
        <div>
          <p className="text-sm text-zinc-500">Drive Traffic</p>
          <p className="text-base">{dataType}</p>
        </div>
      </div>
      <div className="flex gap-1 items-center relative">
        <button onClick={() => handleDisplay('main')} className="h-fit bg-slate-400 bg-opacity-40 p-2 rounded-md flex items-center gap-1 hover:bg-opacity-60 transition-all">
          <p>{display ? timeFrame : 'Sort By'}</p> 
          <Triangle className={`transition-all ${display ? 'rotate-180' : 'rotate-0'}`} fill="white" width={10} height={10}/>
        </button>
        <button onClick={() => handleDisplay('secondary')} className="h-fit bg-slate-400 bg-opacity-40 p-2 rounded-md hover:bg-opacity-60 transition-all"><p>•••</p></button>
        <motion.div 
          animate={{
            display: display ? 'block' : 'none',
          }}
          className='w-[125px] h-fit absolute top-11 left-0 bg-slate-400 bg-opacity-40 p-2 rounded-md gap-1 z-10'>
            <ul className='text-sm'>
              <li className=''><button className='w-full h-full p-2 my-1 rounded-md hover:bg-slate-400 hover:bg-opacity-50 transition-all relative' onClick={() => handleSelect('Today')}>{timeFrame === 'Today' && <span className='absolute left-4'>•</span>} Today</button></li>
              <li className=''><button className='w-full h-full p-2 my-1 rounded-md hover:bg-slate-400 hover:bg-opacity-50 transition-all relative' onClick={() => handleSelect('This Week')}>{timeFrame === 'This Week' && <span className='absolute left-2'>•</span>} This Week</button></li>
              <li className=''><button className='w-full h-full p-2 my-1 rounded-md hover:bg-slate-400 hover:bg-opacity-50 transition-all relative' onClick={() => handleSelect('This Month')}>{timeFrame === 'This Month' && <span className='absolute left-2'>•</span>} This Month</button></li>
            </ul>
          </motion.div>
          <motion.div 
          animate={{
            display: displayRefresh ? 'block' : 'none',
          }}
          className='w-[125px] h-fit absolute top-11 left-0 bg-slate-400 bg-opacity-40 p-2 rounded-md gap-1 z-10'>
            <ul className='text-sm'>
              <li className=''><button className='w-full h-full p-2 my-1 rounded-md hover:bg-slate-400 hover:bg-opacity-50 transition-all relative' onClick={() => handleSelectDataset('Impressions')}>{dataType === 'Impressions' && <span className='absolute left-1'>•</span>} Impressions</button></li>
              <li className=''><button className='w-full h-full p-2 my-1 rounded-md hover:bg-slate-400 hover:bg-opacity-50 transition-all relative' onClick={() => handleSelectDataset('Clicks')}>{dataType === 'Clicks' && <span className='absolute left-2'>•</span>} Clicks</button></li>
             </ul>
          </motion.div>
      </div>
    </div>
      
    <p className="text-xl ml-5"><span className='top-2 right-2 relative'><Eye fill='rgb(113 113 122)' width={15} height={15} /></span> + {impressions as number}k <span className="text-2xl text-green-400">↑</span></p>
    <Line data={currentDataset} options={options}/>
    <div className="flex flex-col gap-2 justify-start h-full py-6">
      <h1>Untitled</h1>
      <p className="text-xs text-zinc-400">Album Name • Artist Name</p>
      <div className="flex gap-2 p-2">
        <button className="w-8 h-8 rounded-full border border-slate-950">r</button>
        <button className="w-8 h-8 rounded-full border border-slate-950">p</button>
        <button className="w-8 h-8 rounded-full border border-slate-950">f</button>
      </div>
    </div>
  </div>
  )
}
