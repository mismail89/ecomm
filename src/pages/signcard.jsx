import React from 'react'
import { MdEmail } from "react-icons/md";

export default function signcard() {
  return (
    <div className='main-sign-card flex lg:flex-row flex-col py-10 lg:py-20 bg-blue-600'>
        <div className='content-div'>
            <h1>Signup our newsletter to get update information, news, insight or promotions.</h1>
        </div>
        <div className='sign-card-input flex flex-col'>
            <input type="text" className='flex py-2 px-2' placeholder='Email' />
            <button className='flex flex-row justify-center items-center py-2 rounded-md'><a href=""><MdEmail /></a>Sign in</button>
        </div>
    </div>
  )
}
