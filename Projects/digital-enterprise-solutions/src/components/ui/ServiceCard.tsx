import React from 'react'
import { type IServiceProps } from 'typings'
import { Plug } from '../icons'


export default function ServiceCard({ service }: {service: IServiceProps}) {
  return (
    // <div className='shadow shadow-slate-300 group w-96 h-96 overflow-hidden rounded-md text-justify'>
    //           <div className='p-10 h-36'>
    //             <div className='mx-auto bg-slate-950 opacity-10 h-1 w-0 group-hover:opacity-100 group-hover:w-14 transition-all rounded-full'/>
    //             <h6 className='w-fit mx-auto'>{ service.title }</h6>
    //             <p className='w-fit mx-auto'>{ service.description }</p>
    //           </div>
    //           <div className='border-t  flex items-center justify-center gap-4 h-60 py-4 px-5'>
    //             <ul className='h-48 w-full bg-white text-sm text-start'>
    //             <li className='py-1 px-2 bg-purple-600 text-white rounded-md w-fit '>Features</li>
    //               { service.features[0].map((feature, i) => <li className='mt-2.5 text-gray-700' key={i}>{ feature }</li>) }
    //             </ul>
    //             {/* <ul className='h-48 w-36 border bg-white text-xs text-start'>
    //               <li className='py-1 px-2 bg-purple-600 text-white rounded-md w-fit '>Case Studies</li>
    //               { service.features[1].map((feature, i) => <li className='mt-2.5 text-gray-700' key={i}>{ feature }</li>) }
    //             </ul> */}
                
    //           </div>
    // </div>
              <div className='h-fit w-80 text-sm'>
                <div className='mx-auto bg-slate-950 opacity-10 h-1 w-0 group-hover:opacity-100 group-hover:w-14 transition-all rounded-full'/>
                <p className='font-bold'>{ service.title }  <Plug fill='rgb(157 23 77)' width={20} height={20}/></p>
                <p className='mx-auto text-gray-600'> description: { service.description }</p>
                <div className='border-l pl-4 pt-4'>
                    <ul className='h-54 w-40 bg-pink-50 text-sm text-start rounded-md p-4'>
                    <li className='text-pink-800 font-semibold flex gap-4 items-center'>Features</li>
                      { service.features[0].map((feature, i) => <li className='mt-2.5 text-pink-400 tracking-tighter' key={i}>{ feature }</li>) }
                    </ul>
                </div>
                {/* <ul className='h-48 w-36 border bg-white text-xs text-start'>
                  <li className='py-1 px-2 bg-purple-600 text-white rounded-md w-fit '>Case Studies</li>
                  { service.features[1].map((feature, i) => <li className='mt-2.5 text-gray-700' key={i}>{ feature }</li>) }
                </ul> */}
              </div>
                
  )
}
