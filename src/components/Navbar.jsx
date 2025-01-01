import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'


function Navbar(props) {
    
  return (
    <>
    <nav className='flex w-full h-20 bg-zinc-800 uppercase  text-white justify-between items-center px-5 py-1 '>
        <h1 className='text-2xl font-roboto'>{props.title} </h1>
        <div  className='flex gap-9 max-md:hidden text-xl  uppercase'>
            <a  className='hover:text-blue-500'  href="">Home</a>
            <a className='hover:text-blue-500'  href="#about">{props.aboutText}</a>
            <a  className='hover:text-blue-500' href="#feature">Feautures</a>
        </div>
        <FontAwesomeIcon  className='hidden max-sm:block text-3xl  max-md:block ' icon={faBars}/>
   </nav>
   <div className='w-96 h-3/5 bg-black p-12 text-white hidden absolute top-1 right-0'>
            <div className='flex-col items-start justify-start text-2xl gap-3 w-full uppercase font-bold h-full flex'>
            <a  className='hover:text-blue-500 '  href="">Home</a>
            <a className='hover:text-blue-500 '  href="#about">{props.aboutText}</a>
            <a  className='hover:text-blue-500 ' href="#feature">Feautures</a>
            </div>
        <FontAwesomeIcon className='hidden max-sm:block absolute top-4 right-3  text-6xl  max-md:block ' icon={faXmark}/>
          <div className=' flex gap-7  text-2xl transition-all duration-500'>
                       <a target='_blank' href="https://www.linkedin.com/in/tayaba-tariq-56783529a/"> <FontAwesomeIcon icon={faLinkedin} className='hover:scale-125 hover:text-blue-400'/></a>
                       <a target='_blank' href="#"> <FontAwesomeIcon icon={faFacebook} className='hover:scale-125 hover:text-blue-400'/></a>
                       <a target='_blank' href="https://wa.me/3085437544"> <FontAwesomeIcon icon={faWhatsapp} className='hover:scale-125 hover:text-blue-400'/></a>
                       <a target='_blank' href="https://www.instagram.com/tayabatariq2023/"> <FontAwesomeIcon icon={faInstagram} className='hover:scale-125 hover:text-blue-400'/></a>
                        </div>
   </div>
   </>

  )
}

export default Navbar

Navbar.propTypes={
    title: PropTypes.string,
    aboutText: PropTypes.string
}
Navbar.defaultProps={
    title:"Crypto heading using default prototype ",
    aboutText:"About text using default "
}