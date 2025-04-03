import React from 'react'
import '../styles/mslider.css';
export default function mslider() {
  return (
    <>
    <div className='flex'>
        <div className='main-mslides'>
            <div className='mslide'>
            <img src="images/sl1.jpg" alt="" />
            <h3>Smart Sales</h3>
            </div>
            <div className='mslide'>
            <img src="images/sl2.jpg" alt="" />
            <h3>Latest Products</h3>
            </div>
            <div className='mslide'>
            <img src="images/sl3.jpg" alt="" />
            <h3>Best Sales</h3>
            </div>
        </div>
    </div>
    </>
  )
}
