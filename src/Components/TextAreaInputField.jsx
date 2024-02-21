import React, {useContext} from 'react'
import {CommonContext} from '../App'


const TextAreaInputField = ({lable, name, id, placeholder }) => {

  const {dispatch} = useContext(CommonContext);

  // const userEntry = (e) => {
  //   getValue(name,e);
  // }

  return (
    <div className='grid grid-cols-1 gap-1 '>
        <label className="text-xl"><b>{lable}:</b></label>
        <textarea 
          className="py-1 pl-2 sm:w-full sm:max-w-80 sm:h-24 border border-b-indigo-950 rounded text-black bg-gradient-to-r from-indigo-100 to-indigo-200
          transition duration-500 ease-in-out hover:scale-105"
          name={name} 
          id={id}
          placeholder={placeholder} 
          onChange={(e) => dispatch({type: name , value: e.target.value}) }
        />
    </div>
  )
}

export default TextAreaInputField