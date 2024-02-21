import React from 'react'

export const WarningMessage = ({warningText}) => {
  return (
    <span className='text-red-700 text-bold text-sm'>
        {warningText}
    </span>
  )
}
