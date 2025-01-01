import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <>
    <div className='w-full text-white max-sm:h-full max-md:h-full h-80 bg-zinc-800 max-lg:h-full flex items-center max-lg:px-20 max-lg:py-10 gap-10 justify-center flex-col max-sm:py-4  px-32 max-sm:px-4 max-md:px-6'>
        <div className='flex w-full  max-sm:text-center  max-md:text-center max-md:py-5 max-sm:py-4 gap-16 max-sm:flex-col max-lg:gap-5 max-md:flex-col max-sm:gap-5 max-md:gap-10 ' >
            <div className='w-1/5 max-sm:w-full max-md:w-full max-sm:text-center'>
                <p className='text-3xl uppercase font-bold mb-3 '>About us</p>
                <p className='text-left+'>We are committed to providing a simple and efficient tool for case conversion. Whether you're a writer, developer, or student, our app makes formatting text effortless.</p>
            </div>
            <div>
                <p className='text-3xl uppercase font-bold mb-3 '>Quick Links</p>
                <p className='hover:text-blue-400 cursor-pointer'><a href="#homee">Home</a></p>
                <p className='hover:text-blue-400 cursor-pointer'><a href="#feature">Feature</a></p>
                <p className='hover:text-blue-400 cursor-pointer'><a href="#about">About </a></p>
                <p className='hover:text-blue-400 cursor-pointer'>Privacy and Policy</p>
                <p className='hover:text-blue-400 cursor-pointer'>Terms and Services</p>
            </div>
            <div>
                <p className='text-3xl uppercase font-bold  mb-3 '>Contact us</p>
                <p className='hover:text-blue-400 cursor-pointer'><a  target='_blank' href="mailto:tayabatariq3@mail.com">tayabatariq3@gmail.com</a></p>
                <p className='hover:text-blue-400 cursor-pointer'><a target='_blank' href="https://wa.me/3085437544">+923085437544</a></p>
            </div>
            <div>
                <p className='text-3xl uppercase font-bold  mb-3 '>Follw Us</p>
                <p>Stay connented with us</p>
             <div className=' gap-4 mt-5  text-2xl transition-all duration-500'>
               <a target='_blank' href="https://www.linkedin.com/in/tayaba-tariq-56783529a/"> <FontAwesomeIcon icon={faLinkedin} className='hover:scale-125 hover:text-blue-400'/></a>
               <a target='_blank' href="#"> <FontAwesomeIcon icon={faFacebook} className='hover:scale-125 hover:text-blue-400'/></a>
               <a target='_blank' href="https://wa.me/3085437544"> <FontAwesomeIcon icon={faWhatsapp} className='hover:scale-125 hover:text-blue-400'/></a>
               <a target='_blank' href="https://www.instagram.com/tayabatariq2023/"> <FontAwesomeIcon icon={faInstagram} className='hover:scale-125 hover:text-blue-400'/></a>
                </div>

            </div>

        </div>
        <p className='text-center text-blue-500  font-bold uppercase'>
        © 2024 Case Converter. All rights reserved.
        </p>


    </div>
    </>
  )
}

export default Footer