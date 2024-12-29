import React from 'react'
import PropTypes from 'prop-types'


function Navbar(props) {
  return (
    <nav className='flex w-full h-20 bg-black  text-white justify-between items-center px-5 py-1 '>
        <h1 className='text-2xl '>{props.title} </h1>
        <div  className='flex gap-9 max-sm:hidden'>
            <a href="#">Home</a>
            <a href="">{props.aboutText}</a>
            <a href="">Contact</a>
            <a href="">Feautures</a>
        </div>
        <div className='flex gap-2'>
            <button className='bg-blue-500 p-3 rounded-md text-white uppercase hover:rounded-lg hover:bg-blue-600'>Log In</button>
            <button className='bg-blue-500 p-3 rounded-md text-white uppercase hover:rounded-lg hover:bg-blue-600'>Sign Up</button>
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