const Modal = () => {
    return (
      <>
     <div className='main-dialoger '>
      <div className='main-dialog-heading'>
      <h1>Log IN</h1>
      <h2>X</h2>
      </div>
      <div className='main-input-dialog'>
        <input type="text" placeholder='Email' className='rounded-md' />
        <input type="text" placeholder='Password' className='rounded-md'/>
        <input type="submit" value="Log In" id='LOG' className='rounded-md bg-blue-600 text-white'/>
      </div>
      
     </div>
      </>
        ) 
    }