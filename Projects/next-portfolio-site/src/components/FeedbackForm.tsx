'use client';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import { CloseIcon, CrossIcon } from './Icons';
import Button from './Button';
import { usePathname } from 'next/navigation';
import { useForm } from '@formspree/react';
import { toast } from 'react-hot-toast';

export default function FeedbackForm() {
  const [display, setDisplay] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false)
  const [state, handleSubmit] = useForm('xqkogqgn');
  const [message, setMessage] = useState('')
  const divRef: null | RefObject<HTMLDivElement> = useRef(null)
  
  const pathEqualsBlog = usePathname().includes('blog') && true

  useEffect(() =>{
    const handleClickOutside = () => {
        if (divRef.current && event && !divRef.current.contains(event.target as Node)!) {
            setDisplay(false)
          }
    }
    if(display) {
        document.addEventListener('click', handleClickOutside);
    }

    if(state.succeeded) {
        toast.success('Message Sent')
        setMessage('')
      }
  
      if(state.errors.length) toast.error('Something went wrong')
      
      if(state.submitting) setIsDisabled(true)

      else setIsDisabled(false)
      
      return () => document.removeEventListener('click', handleClickOutside);
  }, [display, state.succeeded, state.errors.length, state,])


  return (
    <>
      {display && (
          <div ref={divRef} className="bg-white w-96 h-96 rounded-md shadow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <form 
              onSubmit={handleSubmit}
              className="h-full w-full py-4 px-6 text-justify flex flex-col items-center gap-y-4 justify-between">
                <h1 className='text-3xl text-gray-800'>Feedback</h1> <Button className='absolute right-2 top-2' onClick={() => setDisplay(false)} variant='ghost'><CloseIcon fill='#abd'/></Button>
                <p className='text-gray-600'>I am always looking for ways to improve. Please leave any comments, notes, or remarks that will help me become a stronger candidate in the future 😉.</p>
                <textarea required onChange={(event) => setMessage(event.target.value)} value={message} className='border rounded-md p-4 resize-none text-gray-600' placeholder='Message' name="feedback" id="" cols={30} rows={30}></textarea>
                <Button disabled={isDisabled} type='submit' variant="secondary">Submit</Button>        
              </form>
            </div>
      )}
      {!pathEqualsBlog &&
        <button
        onClick={() => setDisplay(!display)}
        className="fixed active:bg-gray-50 bg-white shadow rounded-full h-12 w-12 md:h-14 md:w-14 bottom-3 right-3 md:bottom-10 md:right-10 flex items-center justify-center"
      >
        <CrossIcon fill="#abd" />
      </button>}

    </>
  );
}
