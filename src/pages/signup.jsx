import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function signup() {
  const [Formdata, setFormdta] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handlechange = (e) => {
    setFormdta({...Formdata, [e.target.id]: e.target.value})
  }
  const handlesubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const res = await fetch ('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Formdata)
      })
      const data = await res.json()
      if(data.success === false) {
        setError(true)
      }
      setLoading(false)
      setError(false)
      navigate('/')
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }
  return (
    <div className='main-data-signup-page  bg-slate-300'>
        <div className='main-signup-heading  '>
            <h1>Sign Up</h1>
        </div>
        <form className='main-signup-inputs' onSubmit={handlesubmit}>
            <input type="text" placeholder='Name' className='px-2 py-3 rounded-md' id='Name'  onChange={handlechange}/>
            <input type="email" placeholder='Email' className='px-2 py-3 rounded-md' id='Email' onChange={handlechange}/>
            <input type="password" placeholder='Password' className='px-2 py-3 rounded-md' id='Password' onChange={handlechange}/>
            <p className='text-red-500'>{error && "something went wrong"}</p>
            <input type="submit" disabled={loading} value={loading ? 'Loading...': 'Sign Up'} className='px-2 py-3 rounded-md bg-blue-800 text-white font-bold hover:bg-slate-800 cursor-pointer disabled:opacity-80'/>
            
        </form>
        
    </div>
  )
}
