import React from 'react'
import PropTypes from 'prop-types'


function Navbar(props) {
  return (
    <nav className='flex w-full h-20 bg-zinc-800 uppercase  text-white justify-between items-center px-5 py-1 '>
        <h1 className='text-2xl '>{props.title} </h1>
        <div  className='flex gap-9 max-sm:hidden text-xl  uppercase'>
            <a  className='hover:text-blue-500'  href="">Home</a>
            <a className='hover:text-blue-500'  href="#about">{props.aboutText}</a>
            <a  className='hover:text-blue-500' href="">Feautures</a>
        </div>
       
   </nav>
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