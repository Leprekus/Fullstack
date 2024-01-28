'use client';
import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';
import Button from '@/components/Button';
import { toast } from 'react-hot-toast';
function Contact() {
  const [state, handleSubmit] = useForm('xqkogqgn');
  const [isDisabled, setIsDisabled] = useState(false)

  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [messageInput, setMessageInput] = useState('')

  useEffect(() => {
    if(state.succeeded) {
      toast.success('Message Sent')

      setNameInput('')
      setEmailInput('')
      setMessageInput('')
    }

    if(state.errors.length) toast.error('Something went wrong')
    
    if(state.submitting) setIsDisabled(true)
    
     else setIsDisabled(false)
    
  }, [state.succeeded, state.errors.length, state.submitting])

  return (
    <div
      className='flex text-center text-gray-500'
    >
      <form
        className='md:w-96 flex flex-col items-center justify-center h-96 mx-auto bg-white rounded-sm shadow px-10 gap-4 '
        onSubmit={handleSubmit}
      >
        <h1 className='text-slate-800 mb-10'>
          Contact Me
        </h1>
        <input type='hidden' name='form-name' value='contact' />
        <input
          className='w-full focus:outline-none border-b py-2'
          type='name'
          name='name'
          placeholder='Name'
          required
          value={nameInput}
          onChange={(event) => setNameInput(event.target.value)}
        />
  
        <input
          className='w-full focus:outline-none border-b py-2'
          type='email'
          name='email'
          placeholder='Email'
          required
          value={emailInput}
          onChange={(event) => setEmailInput(event.target.value)}
        />
  
        <input
          className='w-full focus:outline-none border-b py-2'
          type='text'
          name='message'
          placeholder='Message'
          required
          value={messageInput}
          onChange={(event) => setMessageInput(event.target.value)}
        />
        <Button 
         disabled={isDisabled}
         type='submit'>Submit</Button>
      </form>
    </div>
  );
}

export default Contact;
