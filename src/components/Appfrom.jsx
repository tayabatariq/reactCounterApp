import React, { useState } from 'react'

function Appfrom() {
    const [text , setText]=useState("Enter the Text to Analyze....")
  return (
    <>
        <h1 style={{backgroundImage:"url(https://static.vecteezy.com/system/resources/previews/003/096/420/non_2x/close-up-man-use-laptop-computer-free-photo.jpg)"}} className='text-4xl  text-center w-ful bg-red-400'>Transform Text Instantly with a Click</h1>

    <div className="w-full h-full pb-32 bg-zinc-200  flex flex-col justify-center items-center gap-3">
        <textarea name="text" id="text" value={text}  className="resize-none bg-zinc-50 rounded-md p-2 border-2 border-zinc-700 w-full md:w-3/4 h-48 md:h-64"></textarea>
        <div className='flex gap-3 m-5 max-sm:flex-col'>
            <button className='bg-blue-500 p-2 text-white rounded-sm hover:rounded-lg hover:bg-blue-600'>Uppercase to conversion</button>
            <button className='bg-blue-500 p-2 text-white rounded-sm hover:rounded-lg hover:bg-blue-600'>LowerCase conversion</button>
            <button className='bg-blue-500 p-2 text-white rounded-sm hover:rounded-lg hover:bg-blue-600'>Remove Text</button>
            <button className='bg-blue-500 p-2 text-white rounded-sm hover:rounded-lg hover:bg-blue-600'>Remove Extra space </button>
            <button className='bg-blue-500 p-2 text-white rounded-sm hover:rounded-lg hover:bg-blue-600'>Text Reverse</button>
        </div>
    </div>
    </>
  )
}

export default Appfrom