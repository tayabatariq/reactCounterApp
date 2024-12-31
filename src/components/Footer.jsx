import React from 'react'

function Footer() {
  return (
    <>
    <div className='w-full text-white h-80 bg-zinc-800 flex items-center gap-10 justify-center flex-col px-32 max-sm:px-4 max-md:px-6'>
        <div className='flex w-full  gap-16 ' >
            <div className='w-1/5'>
                <p className='text-3xl uppercase font-bold '>About us</p>
                <p>We are committed to providing a simple and efficient tool for case conversion. Whether you're a writer, developer, or student, our app makes formatting text effortless.</p>
            </div>
            <div>
                <p className='text-3xl uppercase font-bold '>Quick Links</p>
                <p>Home</p>
                <p>Features</p>
                <p>Privacy and Policy</p>
                <p>Terms and Services</p>
            </div>
            <div>
                <p className='text-3xl uppercase font-bold '>Contact us</p>
                <p>tayabatariq3@gmail.com</p>
                <p>+923085437544</p>
            </div>
            <div>
                <p className='text-3xl uppercase font-bold '>Follw Us</p>
                <p>Stay connented with us</p>
            </div>

        </div>
        <p className='text-center text-blue-500 font-bold uppercase'>
        © 2024 Case Converter. All rights reserved.
        </p>


    </div>
    </>
  )
}

export default Footer