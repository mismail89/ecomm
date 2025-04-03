import React from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
export default function contact() {
    const form = useRef();
    const [satatus, setstatus] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_dll45hr', 'template_rnzm67b', form.current, {
          publicKey: '1Y0KkhzfAwPeJKCSw',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          }
        );
    };
  return (
    <>
    <div className='main-contact-form-div flex' >
        <form method='POST' ref={form} className='form-contact flex flex-col px-20 bg-slate-300' onSubmit={sendEmail}>
            <h1 className=' text-blue-500'>Contact Us</h1>
            <input type="email" placeholder='Email' className='flex py-3 px-2 rounded-md outline-none border-none' name='from_name'/>
            <input type="text" placeholder='Name'  className='flex py-3 px-2 rounded-md outline-none border-none' name='from_name' />
            <textarea name="" placeholder='Message' className='flex justify-start py-10 px-2 resize-none border-none outline-none'></textarea>
            <input type="submit" className='flex bg-blue-600 text-white rounded-md py-3  text-center  justify-center items-center cursor-pointer' name='message'/>
        </form>
    </div>
    </>
  )
}
