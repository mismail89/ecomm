import React from 'react'
import Hero from './hero'
import Card from './card'
import Product from './product'
import Transparent from './transparent'
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import Slider from './slider';
import Signcard from './signcard';
import Footer from './footer';
import Topsale from './topsale'
import Mslider from './mslider'
export default function home() {
  return (
    <>
    <Hero />
    <Card />
    <Mslider />
    <Product />
    <Transparent />
    <Slider />
    <div className='flex relative h-screen w-full justify-center items-center' id='map'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57728.70742854832!2d55.28440340652772!3d25.26909805218952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434f37cdae93%3A0xde756363a1b78491!2sDeira%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1708238798204!5m2!1sen!2s" className='flex h-screen w-screen' allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
    </iframe>
    <div className='main-contact-map-form rounded-sm   bg-black'>
      <div className='right-form-data flex flex-col'>
        <div className='main-text-fom flex flex-col h-1/4 w-full'>
          <h3>Contact</h3>
          <h1>Be in touch</h1>
          <hr />
          </div>
          <div className='flex flex-row'>
            <a href="" className='flex px-4 py-4 bg-white text-black m-2'><FaFacebook /></a>
            <a href="" className='flex px-4 py-4 bg-white text-black m-2'><BsTwitterX /></a>
            <a href="" className='flex px-4 py-4 bg-white text-black m-2'><FaYoutube /></a>
            <a href="" className='flex px-4 py-4 bg-white text-black m-2'><FaWordpress /></a>
        </div>
        <div className='main-contact-numbers flex flex-col'>
      <h1 className='flex- flex-row'><a href="" className=' text-yellow-600'><FaLocationDot /></a><p>Deira Dubai - Dubai - UAE</p></h1>
      <h1 className='flex- flex-row'><a href=""  className=' text-yellow-600'><MdEmail /></a><p>info@tv-for-sale.com
</p></h1>
      <h1 className='flex- flex-row'><a href="" className=' text-yellow-600'><MdLocalPhone /></a><p>+971 55 400 2860</p></h1>
        </div>
      </div>
      <form className='main-form-inputs'>
      <label htmlFor="">Name</label>
      <input type="text" placeholder='Name' className=' focus:border-none outline-none rounded-md'/>
      <label htmlFor="" >Email</label>
      <input type="text" placeholder='Email' className='focus:border-none outline-none rounded-md '/>
      <label htmlFor="">Message</label>
      <textarea placeholder='Message' className='focus:border-none outline-none rounded-md'></textarea>
      <input type="submit" name="" id="submit" className='rouded-md bg-blue-700 text-white hover:cursor-pointer'/>
      </form>
    </div>
    </div>
    </>
  )
}
