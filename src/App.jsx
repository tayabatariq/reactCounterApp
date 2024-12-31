import React from 'react'
import Navbar from './components/Navbar'
import Appfrom from './components/Appfrom'
import Aboutpage from './components/Aboutpage'
import Feauture from './components/Feauture'
import Box from './components/Box'
import Footer from './components/Footer'

function App() {

  return (
 <>
 <Navbar title="Case Convertor" aboutText="About US"/>
 <Appfrom/>
 <Aboutpage/>
 <Box/>
 <Feauture/> 
 <Footer/>
 </>

  )
}


export default App