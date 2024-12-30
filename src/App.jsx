import React from 'react'
import Navbar from './components/Navbar'
import Appfrom from './components/Appfrom'
import Aboutpage from './components/Aboutpage'

function App() {

  return (
 <>
 <Navbar title="Case Convertor" aboutText="About US"/>
 <Appfrom/>
 <Aboutpage/>
 </>

  )
}


export default App