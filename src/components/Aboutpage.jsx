import React from 'react'

function Aboutpage() {
  return (
    <div id="about" className='w-full h-full bg-zinc-200 flex justify-center items-center flex-col gap-10 px-12 max-sm:px-4 max-sm:py-4 max-md:px-6 max-md:py-5 max-lg:px-3 text-center py-12'>
        <h1 className='text-6xl  font-bold uppercase max-sm:text-3xl max-md:text-4xl  font-serif'>About Text Converter App</h1>
        <div className='w-full gap-10 px-24 max-lg:px-10 flex max-sm:flex-col max-sm:px-4 max-md:flex-col max-md:px-5'>
            <div className='h-full w-full rounded-md '><img className='rounded-md' src="https://images.unsplash.com/photo-1514543250559-83867827ecce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8" alt="" /></div>
      <div className='w-full text-2xl text-left '>
      <p > 
    Welcome to the Text Converter App! Our application is designed to help you easily convert text into various formats, 
    including capitalization, lowercase, uppercase, and more. Whether you are a student, a professional, or someone who 
    frequently works with text, this app is tailored to meet your needs.
</p>
<button  className='bg-blue-500 p-2 text-white mt-10 rounded-sm hover:rounded-lg hover:bg-blue-600'><a href="#home">Try Now</a></button>


      </div>
        </div>


 

    </div>
  )
}

export default Aboutpage