import React from 'react'

export default function transparent() {
    const containerStyle = {
        backgroundImage: `url(https://img.freepik.com/free-photo/landscape-with-mountains-tv-appliance-generative-ai_188544-19453.jpg?w=1060&t=st=1708163004~exp=1708163604~hmac=7184a166dab4edf8448c7f4f2dc2dd5eec904c945135401a77457e70dda9c8f1)`,
        backgroundSize: 'cover', // Adjust as needed
        backgroundPosition: 'fixed', // Adjust as needed
        opacity: '1',
        // transition: 'opacity 0.5s ease-in-out'
      };
  return (
    <>
    <div className='main-post flex flex-row h-screen justify-arround' style={containerStyle}>
        <div className='main-text-trans flex flex-col w-1/2 justify-arround items-center'>
            <h2 className='py-5'>Limited Time Offer</h2>
            <h1 className='py-5'>Don't wait! Get your dream TV now at an unbeatable price!</h1>
            <p className='py-5'>Explore our wide range of premium TVs and enjoy up to 30% off on selected models.
</p>
<h3>Hurry up! This offer won't last long.
</h3>
<a href="" className='slide flex justify-center items-center px-5 py-3 bg-white text-black w-40  hover:bg-transparent border-spacing-2'>Shop Now</a>
        </div>
        <div className='flex w-1/2' id='space'></div>
    </div>
    </>
  )
}
