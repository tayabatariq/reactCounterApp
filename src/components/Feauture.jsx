import React from 'react'
import Div from './Div'


function Feauture() {
  return (
    <>
    <div id='feature' className='w-full gap-3 h-full max-lg:px-10 max-lg:py-10 bg-zinc-200 flex flex-col items-center justify-center px-32 max-sm:px-2 max-sm:py-2 py-12'>
      <h1 className='text-6xl text-center uppercase font-bold max-sm:text-4xl max-md:text-5xl '>Explore Advanced Features</h1>
      <div className='w-full max-sm:h-full max-md:h-full h-96 flex items-center gap-8 mt-10 justify-center max-sm:flex-col max-md:flex-col '>
    <Div link="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" heading="Bulk Text Conversion" para="Upload or paste large amounts of text and let our tool handle the case conversion seamlessly. Perfect for articles, reports, or documents."/>
    <Div link="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbXB1dGVyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D" heading="Customizable Options" para="Choose specific case styles like UPPERCASE, lowercase, Title Case, or even sentence case. Adjust settings to match your requirements!"/>
    <Div link="https://images.unsplash.com/flagged/photo-1553028826-ccdfc006d078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" heading=" Download Results " para="After converting your text, download the result as a file in TXT, PDF, or DOC format. Simplify your workflow with ease!"/>


      </div>
    </div>
    </>
  )
}

export default Feauture