import { useState } from 'react'
import { IoStarSharp } from "react-icons/io5";
import  Data  from '../constants/constant';
import { Link } from 'react-router-dom';
export default function product() {
  const [cart, setCart] = useState([])
  return (
    <>
    <div className='main-product-div flex  flex-col  justify-center items-center py-5'>
        <div className='header-product flex flex-col justify-center items-center'>
            <h1>New Arrivals</h1>
            <div className='flex py-1 bg-blue-600 px-12'></div>
        </div>
        <div className='product-items grid grid-cols-2 lg:grid-cols-4 gap-2 justify-center items-center '>{
                Data.map((item) => {
                    return (
            <div className='item flex flex-col justify-arround items-center py-3 shadow-md transition-transform transform hover:scale-110 cursor-pointer' key={item.id}>
               <Link to={`/details/${item.id}`}>
                <img src={item.img} />
                <h1>{item.title}</h1>
                <p className='flex flex-row text-yellow-400 justify-center items-center'><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></p>
                <h2 className='flex justify-center items-center'>AED: &nbsp;{item.rs}</h2>
                {/* <h3>EAN: 2000000007915</h3> */}
                </Link>
                <button className='flex px-6 py-2.5 bg-blue-700 text-white rounded-md' onClick={() => {
                  setCart((prevCart) => [...cart, item]);
                  localStorage.setItem('cart', JSON.stringify(cart));
                }}>Add to cart</button>
            </div>
                    )
            })
           }
           
           
            
        </div>
        
       
    </div>
    </>
  )
}
