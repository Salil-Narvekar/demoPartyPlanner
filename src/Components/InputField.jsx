import React, {useContext}  from 'react'
import {CommonContext} from '../App'


const InputField = ({lable, name, id, type, placeholder, min}) => {

  const {newState, dispatch} = useContext(CommonContext);

  console.log("newsate name",newState[name])

  // const userEntry = (e) => {
  //   getValue(name,e);
  // }

  return (
    <div className='grid grid-cols-1 gap-1 '>
      <label className="text-xl"><b>{lable}:</b></label>
      <input 
        className="py-1 pl-2 sm:w-full sm:max-w-64 border border-b-indigo-950 rounded text-black bg-gradient-to-r from-indigo-100 to-indigo-200
        transition duration-500 ease-in-out hover:scale-95" 
        name={name} 
        id={id}
        type={type} 
        placeholder={placeholder}
        min={min}
        value={newState[name] && newState[name]}
        onChange={(e) => dispatch({type: name , value: e.target.value}) }
      />
    </div>
  )
}

export default InputField