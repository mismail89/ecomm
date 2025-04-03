import React from 'react'
import { useState, useEffect } from 'react';
import { BsFillLightningChargeFill } from "react-icons/bs";
import Pdetails from '../constants/top';
import '../styles/topsale.css';
export default function topsale() {
    const [minutes, setminutes] = useState(60);
    const [seconds, setseconds] = useState(60);
    const [ hours, sethours] = useState(12);
    useEffect (() => {
        const timer = setInterval(() => {
            setseconds(seconds => seconds - 1);
            if (seconds === 0) {
                setseconds(60);
                setminutes(minutes => minutes - 1);
            }
            if (minutes === 0) {
                setminutes(60);
                sethours(hours => hours - 1);
            }
            if (hours === 0) {
                sethours(12);
            }
        }, 1000);
        return () => clearInterval(timer);
    })
  return (
    <>
    <div className='main-topsale-div'>
        <div className='topsale-header'>
<span><h1>TVs SALES</h1> <h2><BsFillLightningChargeFill /></h2><p>Ends In {hours}: {minutes} :{seconds} </p></span>
        </div>
        <div className='topsale-product-div'>
                {
                    Pdetails.map((item) => {
                        return (
            <div className='topsale-product' key={item.id}>
                <div className='topsale-img'>
                    <img src={item.img} alt="" />
                </div>
                <div className='topsale-text'>
                    <h1>$ {item.rs}</h1>
                    <h2>${item.mn}</h2>
                    <h3>save {item.sv}</h3>
                </div>
            </div>
                        )
                 })
}
        </div>
    </div>
    </>
  )
}
