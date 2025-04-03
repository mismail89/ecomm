import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
export default function footer() {
  return (
    <>
    <div className='flex flex-col justify-center items-center lg:py-30 bg-slate-300'>
    <div className='flex lg:flex-row justify-center flex-col items-center'>
    <div className='main-footer-p-text flex justify-center items-center flex-col'>
    <h1>About</h1>
    <p>Looking for a television that has amazing features and goes with your interiors? Want to stay at home under the cool comfort of the AC, with good TV shows to keep you company? If yes, you have landed in the right place. Browse through our portfolio of televisions, available in different types like LED Tvs, OLED TVs, QLED TVs, 4K TVs and 8k TVs. </p>
    </div>
    <div className='footer-links-pages flex flex-col'>
        <h1>Quick Links</h1>
        <h3><a href=""><FaRegArrowAltCircleRight /></a><p>Home</p></h3>
        <h3><a href=""><FaRegArrowAltCircleRight /></a><p>About</p></h3>
        <h3><a href=""><FaRegArrowAltCircleRight /></a><p>Shop</p></h3>
    </div>
    <div className='footer-links-pages flex flex-col'>
        <h1>Products</h1>
        <h3><a href=""><FaRegArrowAltCircleRight /></a><p>Products</p></h3>
        <h3><a href=""><FaRegArrowAltCircleRight /></a><p>Televisions</p></h3>
        <h3><a href=""><FaRegArrowAltCircleRight /></a><p>LG</p></h3>
    </div>
    <div className='footer-links-pages flex justify-center items-center flex-col'>
        <h1>Support</h1>
        <h3  id='tfooter'><a href=""><FaRegArrowAltCircleRight /></a><p>My Account</p></h3>
        <h3  id='tfooter'><a href=""><FaRegArrowAltCircleRight /></a><p>Returns & Refund</p></h3>
        <h3  id='tfooter'><a href=""><FaRegArrowAltCircleRight /></a><p>Contact</p></h3>
    </div>
    </div>
    <div className='last-footer-links-img flex flex-col justify-center items-center py-20'>
        <div className='img-footer flex justify-center items-center'>
            <img src="https://tv-for-sale.com/wp-content/uploads/2024/02/Tv-for-Sale-logo-Asmat-2048x968.png" />
        </div>
        <div className='flex-flex-col justify-center items-center'>
            <p>Copyright © 2024 TV For Sale, all rights reserved. </p>
            <div className='main-footer-icons-links flex flex-row'>
                <a href="" className=' hover:text-red-500'><FaFacebook /></a>
                <a href="" className=' hover:text-red-500'><BsTwitterX /></a>
                <a href="" className=' hover:text-red-500'><FaYoutube /></a>
                <a href="" className=' hover:text-red-500'><FaInstagramSquare /></a>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
