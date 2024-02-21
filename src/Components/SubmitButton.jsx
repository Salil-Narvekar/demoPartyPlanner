import React from 'react'

const SubmitButton = ({submitButtonLable, submitButtonName, onClickSubmit}) => {
  return (
    <div 
        className="text-center bg-gradient-to-r from-green-700 to-green-600 text-slate-300
        transition duration-500 ease-in-out hover:scale-95 hover:bg-gradient-to-l from-green-700 to-green-600
        cursor-pointer rounded-lg sm:w-full md:w-auto font-semibold py-2 m-3 ml-6 mr-6"
        name={submitButtonName}
        onClick={onClickSubmit}
    >
        {submitButtonLable}
    </div>
  )
}

export default SubmitButton