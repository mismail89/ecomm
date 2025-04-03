import { useState } from 'react'
import { IoStarSharp } from "react-icons/io5";
import Pdata from '../constants/pdetils';
import { useEffect } from 'react';
import { json, useParams } from 'react-router-dom';
import '../styles/review.css';
import { CgProfile } from "react-icons/cg";
import { useSelector } from 'react-redux';
export default function productdetIL() {
  const { id } = useParams()
  const [Data, setData] = useState([])
  const [image, setImage] = useState('')
  const [reviews, setReviews ] = useState([])
  const [loading, setLoading] = useState(false)
  const [subtext, setSubtext] = useState('Submit Review')
  useEffect(() => {
    const pid = Pdata.find(pro => pro.id == id)
    setData(pid)
    setImage(pid.img)
    const fetchReviews = async () => {
      try {
       
        const response = await fetch('http://localhost:5000/api/getreviews', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id }),
        });
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error.message);
      }
    };

    fetchReviews();
  }, [id])
  const handleImageClick = (newImage) => {
    setImage(newImage);
  };
  const {currentUser} = useSelector((state) => state.user)
  const [comment, setcomment] = useState('')
  const postreview = async (e) => {
    e.preventDefault()
    
   try {
    setLoading(true)
    const res = await fetch ('http://localhost:5000/api/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        name: currentUser.Name,
        comment: comment
      })
      
    })
    const data = await res.json()
    setLoading(false)
    setSubtext(data.message)
   } catch (error) {
    setLoading(false)
    setSubtext(error.message)
   }
  }
  return (
    <>
    <div className='main-detail-page-div'>
      <div className='detail-images'>
        <div className='details-main-image'>

      <img src={image} alt="" />
        </div>
        <div className='smart-images'>
          <img src={Data.img1} alt="" onClick={()=> handleImageClick(Data.img1)}/>
          <img src={Data.img2} alt="" onClick={()=> handleImageClick(Data.img2)} />
          <img src={Data.img3} alt="" onClick={()=> handleImageClick(Data.img3)} />
        </div>
      </div>
      <div className='text-details-page'>
        <div className='upper-div'>
          <h2>{Data.title}</h2>
          <h1 className='flex flex-row text-yellow-500' id='h1text'><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /> &nbsp; &nbsp;     <h2 id='h2-text'>({reviews.length} &nbsp;customer reviews)</h2></h1>
        </div>  

        <div className='middle-div'>
          <h1 className='flex flex-row'>Price:  &nbsp;<p>{Data.rs}</p></h1>
          <h1 className='flex flex-row'>Display:  &nbsp;<p>{Data.display}</p></h1>
          <h1 className='flex flex-row'>Resulation:&nbsp;  <p>{Data.resolution}</p></h1>
          <h1 className='flex flex-row'>Processor:&nbsp;  <p>{Data.processor}</p></h1>
          <h1 className='flex flex-row'>Sound:&nbsp;  <p>{Data.sound}</p></h1>
        </div>
        <div className='lower-div flex flex-col justify-between items-center'>
          <p>{Data.des}</p>
          <a href="https://wa.me/+923097315943?text=Hello" className=' bg-green-700 flex text-center items-center py-5 lg:py-5 rounded-md text-white'>Order On Whatsapp</a>
        </div>
        
      </div>
    </div>
    <div className='review-form-submit'>
      <h1 id='hh1'>Reviews</h1>
      <div className='reviews-from-user'>
        {
          reviews.map((item) => {
            return (
              <div className='bg-slate-300 py-4' key={item.name}>
        <h1><CgProfile />{item.name}</h1>
        <p>{item.comment}</p>
        </div>
            )
          })
        }
      
      </div>
     
      <form onSubmit={postreview}>
        <input type="text" placeholder='Review' className='py-6 px-2' value={comment} onChange={(e)=> setcomment(e.target.value)}/>
        <input type="submit" value={loading ? "Sending...": subtext} className='py-4 bg-blue-600'/>
      </form>
    </div>
    </>
  )
}
