import React from 'react'

function Aboutpage() {
  return (
    <div id="about" className='w-full h-full bg-zinc-200 flex justify-center items-center flex-col gap-10 px-12 py-6'>
        <h1 className='text-6xl  font-bold uppercase max-sm:text-3xl max-md:text-4xl  font-serif'>About Text Converter App</h1>
        <div className='w-full gap-10 px-24 flex max-sm:flex-col max-sm:px-4 max-md:flex-col max-md:px-5'>
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


 
<h2>Our Mission</h2>
 <p>
     At Text Converter, our mission is to provide a simple and intuitive tool that empowers users to manipulate text 
     effortlessly. We believe that transforming text should be a hassle-free experience, allowing you to focus on 
     what truly matters: your content.
 </p>

 <h2>Features</h2>
 <ul>
     <li><strong>Text Capitalization:</strong> Convert your text so that the first letter of each word is capitalized, making it suitable for titles and headings.</li>
     <li><strong>Uppercase and Lowercase Conversion:</strong> Change your text to all uppercase or all lowercase letters with just a click.</li>
     <li><strong>Easy to Use:</strong> Our user-friendly interface ensures that anyone can use the app without any technical knowledge.</li>
     <li><strong>Instant Results:</strong> Get immediate feedback as you transform your text, allowing for quick adjustments and iterations.</li>
 </ul>
 <h2>How to Use</h2>
 <p>
     Using the Text Converter App is simple! Just type or paste your text into the input area, select the desired conversion 
     option, and click the corresponding button. Your converted text will appear instantly for you to copy or use as needed.
 </p>

 <h2>Why Choose Us?</h2>
 <p>
     We understand the importance of efficient text manipulation in today's fast-paced world. Our app is not only 
     effective but also designed with your convenience in mind. With regular updates and improvements based on user feedback, 
     we strive to provide you with the best possible experience.
 </p>

 <h2>Get in Touch</h2>
 <p>
     We would love to hear from you! If you have any questions, suggestions, or feedback, please reach out to us via our 
     contact page. Your input is invaluable in helping us improve our app and serve you better.
 </p>

 <h2>Thank You!</h2>
 <p>
     Thank you for choosing the Text Converter App. We hope you find it helpful and easy to use!
 </p> 

    </div>
  )
}

export default Aboutpage