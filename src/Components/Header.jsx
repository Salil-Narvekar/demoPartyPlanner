import React from 'react'

const Header = ({headerText, subHeader}) => {
  return (
    <div className='transition duration-500 ease-in-out hover:scale-110 hover:-translate-y-3'>
      
      <span className='text-4xl font-extrabold font-serif'>{headerText}</span><br/>
      <i className='text-base font-normal font-sans'>{subHeader}</i>
    
    </div>
  )
}

export default Header