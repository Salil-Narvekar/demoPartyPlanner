import React from 'react'

const NavContent = ({title, subtitle, onClick}) => {
  return (
    <div onClick={onClick}>
        <p className='sm:text-lg mb-2 py-1 border-b rounded-md transition duration-500 ease-in-out hover:scale-95 cursor-pointer hover:shadow-inner hover:translate-x-2'> <b>{title}{": "}</b> {subtitle}</p>
    </div>
  )
}

export default NavContent