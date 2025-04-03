import { useState, useEffect,  } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";
import axios from 'axios';
import { signInStart, signInSuccess, signInFailuer } from '../redux/user/userslice';
import { useDispatch, useSelector } from 'react-redux';

// import { Dialog, Transition } from '@headlessui/react'
// import { XMarkIcon } from '@heroicons/react/24/outline'


import Hero from './hero';
import Home from './home'
import { Router, Link, useNavigate } from 'react-router-dom';
import Oauth from '../components/oauth';

export default function Header() {
  const {currentUser} = useSelector(state => state.user)
  const [count, setCount] = useState(false)
  const [data, setData] = useState(0)
  const [opendia, setopendia] = useState(false)
  const [text, settext] = useState('')
  
  const dispatch = useDispatch()

  const styling = {
    width: count ? '250px' : '0%', display: count ? 'flex' : 'none', transition: '1s'
  };
  
  useEffect(() => {
    const Data = localStorage.getItem('cart');
    const datas = JSON.parse(Data);
    setData(datas.length);
  })
  const Modal = () => {
    const [Formdata, setFormdta] = useState({})
    const { loading, error} = useSelector((state) => state.user)
    const [Name, setName] = useState('Sign In')
    const [color, setColor] = useState("green")
    const navigate = useNavigate()
    const handlechange = (e) => {
      setFormdta({...Formdata, [e.target.id]: e.target.value})
    }
    const handlesubmit = async (e) => {
      e.preventDefault()
      try {
        dispatch(signInStart())
        const res = await fetch ('http://localhost:5000/api/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },


          body: JSON.stringify(Formdata)
        })
        const data = await res.json()
        if(data.success === false) {
          dispatch(signInFailuer(data.message))
          setColor("red")
          settext("something went wrong")
        }
        dispatch(signInSuccess(data))
        settext("Sign In Success")
        navigate(`/`)
        setopendia(false)
        
      } catch (error) {
        dispatch(signInFailuer(error))
        setColor("red")
        settext("something went wrong")
      }
    }
    const sttyle = {
      color: color
    }
  return (
    <>
   <div className='main-dialoger '>
    <div className='main-dialog-heading'>
    <h1>LOG IN</h1>
    <h2 onClick={() => setopendia(!opendia)}>X</h2>
    </div>
    <hr />
    <form className='main-input-dialog disabled:opacity-50' onSubmit={handlesubmit} >
      <input type="email" placeholder='Email' className='rounded-md disabled:opacity-50' id='Email'  onChange={handlechange} disabled={loading}/>
      <input type="password" placeholder='Password' className='rounded-md disabled:opacity-50' id='Password'onChange={handlechange} disabled={loading}/>
      <p style={sttyle}>{text}</p>
      <input type="submit"  value={loading ? "Loading....": "Log In"} disabled={loading} id='LOG' className='rounded-md bg-blue-600 text-white disabled:opacity-50'/>
    </form>
    <Oauth />
    <div className='main-sign-up'>
      <p className='text-green-900'>Don't Have account ?</p>
      <Link to={'/signup'}>
      <a href="" onClick={() => setopendia(!opendia)}>Sign Up</a>
      </Link>
    </div>
   </div>
    </>
      ) 
  }

  return (
    <>
    <div className=' main-navbar flex flex-col text-white bg-blue-800 py-6 justify-arround'>
      <div className='main-logos-data flex flex-row justify-around'>
    <div className='logos-and-nav flex flex-row w-1/5 '>
      <button onClick={() => setCount(!count)}><GiHamburgerMenu /></button>
      <img src="https://tv-for-sale.com/wp-content/uploads/elementor/thumbs/Tv-for-Sale-qjlca3qtj5z0o1w1bu10bqeg2ddmxrff878s6jeosg.png"/>
    </div>
    <div className='search-and-button flex w-1/3'>
    <input type="text" className='flex text-black focus:border-none focus:outline-none rounded-md rounded-r-none px-2' placeholder='Search' />
    <button className='bg-yellow-500 text-black flex justify-center items-center rounded-md rounded-l-none'><CiSearch /></button>
    </div>
    <div className='cart-bar flex w-1/4'>
        <a href="" className='flex flex-row justify-between w-1/4 items-center' id='Cartid'><img src='' alt="" />
        {currentUser ? (
          <h1 onClick={(e) =>{
            e.preventDefault() 
             setopendia(!opendia)
          }
          }>
          {currentUser.Name}
          </h1>
        ):
        (<h1 onClick={(e) =>{
          e.preventDefault() 
           setopendia(!opendia)
        }
        }>Sign in
        
        </h1>)}</a>
        <Link to={'/carts'}>
    <button className='flex justify-center items-center'><FaCartPlus /><h1 className='absolute text-red-500' id='cart-num'>{data}</h1></button>
    </Link>
    </div>
    </div>
    <div style={styling} className=' main-data-links bg-blue-800 text-white transition-all'>
    <a id='signin' onClick={(e) =>
      {
        e.preventDefault()
        setCount(!count)
        setopendia(true)
      }
      } >Sign In</a>
    <Link to={'/'} >
    <a onClick={() => setCount(!count)} >Home</a>
    </Link>
    <Link to={'/about'} >
    <a onClick={() => setCount(!count)} >About</a>
    </Link>
    <Link to={'/samsung'}>
    <a onClick={() => setCount(!count)} >Samsung Tvs</a>
    </Link>
    <Link to={'/lgtvs'}>
    <a onClick={() => setCount(!count)} >LG Tvs</a>
    </Link>
    <Link to={'/shop'}>
    <a onClick={() => setCount(!count)} >Shop</a>
    </Link>
    <a onClick={() => setCount(!count)} >Deals</a>
    <a onClick={() => setCount(!count)} >Best Sellers</a>
    <Link to={'/contact'}>
    <a onClick={() => setCount(!count)} >contact</a>
    </Link>
    </div>
    </div>
    <hr className='py-0.3 flex top-2' />
    <div className='main-brand-tv flex  justify-around items-center py-4'>
      <div className='main-braind-tv-container flex flex-row w-11/12 justify-between items-center'>
      <Link to={'/lgtvs'}>
      <a href="">LG TVs</a>
      </Link>
      <Link to={'/samsung'}>
      <a href="">SAMSUNG TVs</a>
      </Link>
      <a href="">4K TELEVISIONs</a>
      <a href="">8K TELEVISIONs</a>
      <a href="">QNED TVs</a>
      <a href="">QLED TVs</a>
      <a href="">OLED TVs</a>
      </div>
    </div>
    <hr />
    {opendia && <Modal />}
    </>
  )
}




//////// main data      //////





