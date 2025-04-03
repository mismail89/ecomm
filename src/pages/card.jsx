import React from 'react'
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { GiLifeBar } from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa";;

export default function card() {
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 place-items-center py-5 gap-10 md:grid-cols-3'>
        <div className='main-card flex flex-col lg:flex-row lg:gap-4 justify-center items-center'>
            <div className='card-logo-img'>
                <h1><FaMoneyCheckDollar /></h1>
            </div>
            <div className='card-text-part flex flex-col'>
                <h1>Payment on Delivery</h1>
                <p>We offer cash on delivery scheme for customers.</p>
            </div>
        </div>
        <div className='main-card flex flex-col  lg:flex-row lg:gap-4 justify-center items-center'>
            <div className='card-logo-img'>
                <h1><GiLifeBar /></h1>
            </div>
            <div className='card-text-part flex flex-col jus'>
                <h1>1 Year Warranty</h1>
                <p>Give extra life to your TV's.</p>
            </div>
        </div>
        <div className='main-card flex flex-col lg:flex-row lg:gap-4 justify-center items-center'>
            <div className='card-logo-img'>
                <h1><FaRegHandshake /></h1>
            </div>
            <div className='card-text-part flex flex-col'>
                <h1>24/7 Support</h1>
                <p>We provide 24/7 customer support for your TV.

</p>
            </div>
        </div>
        
    </div>
  )
}
