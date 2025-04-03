import React from 'react'
import { useState, useEffect } from 'react';

export default function hero() {
  const urls = 'https://img.freepik.com/free-photo/modern-indoor-living-room-with-comfortable-sofa-generative-ai_188544-19449.jpg?t=st=1708054429~exp=1708055029~hmac=e5d097e387d3a29dcb029c96c5fb2d56c86dafea19e88686cccedc52b53deaa0';
  const seurl = 'https://img.freepik.com/free-photo/modern-office-with-computer-equipment-technology-generative-ai_188544-12162.jpg?size=626&ext=jpg&ga=GA1.1.1058738728.1699355251&semt=ais';
  const texts = ['https://img.freepik.com/free-photo/landscape-with-mountains-tv-appliance-generative-ai_188544-19453.jpg?size=626&ext=jpg&ga=GA1.1.1058738728.1699355251&semt=ais', 'https://img.freepik.com/free-photo/empty-stylish-neon-lit-home-studio-interior-illuminated-with-neon-lights-night-artwork_482257-76771.jpg?size=626&ext=jpg&ga=GA1.1.1058738728.1699355251&semt=ais', 'https://img.freepik.com/free-photo/modern-bedroom-with-luxury-decor-illuminated-with-electric-lamp-generative-ai_188544-19445.jpg?size=626&ext=jpg&ga=GA1.1.1058738728.1699355251&semt=ais'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change the index to rotate through the array
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [texts.length]);
  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(255,255,255,.4), rgba(25,25,25,.5)), url(${texts[index]})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    width: '100%', // Adjust as needed
    height: '400px', // Adjust as needed
    opacity: '1',
    // transition: 'opacity 0.5s ease-in-out'
  };
  const bgimg = {
    backgroundImage: `url(${urls})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    width: '100%', // Adjust as needed
    height: '400px', // Adjust as needed
    opacity: '1',
    transition: 'opacity 0.5s ease-in-out'
  };
  const sedt = {
    backgroundImage: `url(${seurl})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    width: '100%', // Adjust as needed
    height: '400px', // Adjust as needed
    opacity: '1',
    transition: 'opacity 0.5s ease-in-out'
  };
  return (
    <>
    <div className='flex main-hero justify-center '>
    <div className='main-slider-big-image flex flex-row w-12/11 '>
      <div style={containerStyle} className='main-images-animate'>
      
      <h1 className='text-slate-100' id='bgtext'>SMART TV & LATEST</h1>
      <p className='text-white ' id='p'>Amazing deals. Great 500+ brands. Real Savings.</p>
      <button className='text-white bg-transparent px-9 py-3 rounded-sm' id='button'>SHOP NOW</button>
      
      </div>
      <div className='main-text-animate flex flex-col justify-center items-center overflow-hidden'>
        <div  style={bgimg} className='main-one-text flex flex-col m-3 py-7 justify-center items-center tex-slate-200'>
          <p id='p'>New</p>
      <h1>In Stock</h1>
      <button id='button' className='flex px-7 py-3 text-slate-200  hover:bg-slate-400 hover:rounded-lg'>Shop Now</button>
      </div>
      <div  style={sedt} className='main-one-text flex flex-col py-7 overflow-hidden justify-center items-center tex-slate-200'>
          <p id='p'>GET</p>
      <h1>30% DISCOUNT</h1>
      <button id='button' className='flex px-7 py-3 text-white hover:bg-slate-400 hover:rounded-lg'>Shop Now</button>
      </div>
      </div>
    </div>
    </div>
    <div className='flex justify-center items-center py-5'>
      <div className='main-icons-div flex flex-row justify-center items-center'>
        <div className='a-tag-div flex flex-col'>
          <a href="" className='flex-flex-col'>
            <img src="https://cdn-icons-png.freepik.com/256/3204/3204978.png?ga=GA1.1.1058738728.1699355251&semt=ais" alt="" />
            <h1>ALL TVs</h1>
          </a>
        </div>
        <div className='a-tag-div flex flex-col'>
          <a href="" flex-flex-col>
            <img src="https://cdn-icons-png.freepik.com/256/9727/9727653.png?ga=GA1.1.1058738728.1699355251&semt=ais" alt="" />
            <h1>DEALS</h1>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}
