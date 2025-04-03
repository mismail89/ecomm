import { useEffect } from 'react'
import { useState } from 'react';
import Images from '../constants/image'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
export default function slider() {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(Images)

  useEffect(() => {
    if (count <= 0) {
      setCount(0)
    }
     if(count > data.length - 1){
        setCount(1)
    }
  })
  return (
    <>
    <div className='main-slider-effect'>
        <div className='left-arrow' onClick={() => setCount(count -1)}><h1><FaArrowAltCircleLeft /></h1></div>
      <div className='center-div-img'>
        <div className='img-url-dev '>
            <img src={data[count]} alt="" />
        </div>
      </div>
      <div className='right-arrow' onClick={() => setCount(count + 1)}><h1><FaArrowAltCircleRight /></h1></div>
    </div>
    </>
  )
}
