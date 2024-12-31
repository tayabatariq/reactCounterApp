import React from 'react'

function Div(props) {
  return (
    <>
    <div className='w-full h-full border-2 hover:bg-zinc-300 hover:scale-110 transition-all duration-500 border-zinc-900 rounded-lg overflow-hidden'>
        <div className='w-full h-1/2 rounded-lg hover:scale-125  hover:translate-x-4 transition-all duration-500 hover:skew-y-3 bg-red-400 overflow-hidden'>
        <img src={props.link} alt="" />

        </div>
        <div className='w-full h-1/2 text-center  p-3 mt-8'>
            <h1 className='text-3xl font-bold'> {props.heading}</h1>
            <p className='mt-3'>{props.para}</p>
        </div>


    </div>
    </>
  )
}

export default Div