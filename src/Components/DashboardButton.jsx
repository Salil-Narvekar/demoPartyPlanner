import React from 'react'

const DashboardButton = ({buttonLable, name, onClickFunction}) => {

    return (
        <button 
            className="bg-gradient-to-r from-indigo-950 to-cyan-700 text-slate-300
            transition duration-500 ease-in-out hover:scale-110 hover:bg-gradient-to-l from-indigo-950 to-cyan-700
            cursor-pointer rounded-lg sm:w-full md:w-auto font-semibold py-2 pl-4 pr-4 m-2 "
            name={name}
            onClick={onClickFunction}
        >
            {buttonLable}
        </button>
    )
}

export default DashboardButton