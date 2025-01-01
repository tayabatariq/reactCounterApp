import React, { useState } from 'react'

function Appfrom() {
  const uperchangehandler=()=>{
    const newtext = text.toUpperCase();
    setText(newtext);
setTimeout(() => {
  alert("Uppercase conversion successful!");
}, 0);  

  }
  const lowerchangehandler=()=>{
    const newtext = text.toLowerCase();
    setText(newtext);setTimeout(() => {
      alert("Lowercase conversion successful!");
    }, 0);  
    


  }
  const removerhandler=()=>{
    const newtext = "";
    setText(newtext);
    setTimeout(() => {
      alert("All text remove successful!");
    }, 0);  
    

  }
  const removeextraspaces=()=>{
    const newtext = text.trim();
    setText(newtext);
    setTimeout(() => {
      alert("Remove Extra spaces successful!");
    }, 0);  
    
  }

  const reversetext=()=>{
    const newtext = text.split('').reverse().join("");
    setText(newtext);
    setTimeout(() => {
      alert("Reverse  conversion successful!");
    }, 0);  
    

  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('Text copied to clipboard!');
        })
        .catch(err => {
            console.error('Error copying text: ', err);
        });
        
};
  const captilxedhandler=()=>{
    const captilzedtext= text.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    setText(captilzedtext)
    setTimeout(() => {
      alert("Captilized conversion successful!");
    }, 0);  
    

  }


  const handleOnchange=(event)=>{
    setText(event.target.value)

  }
    const [text , setText]=useState("Enter the Text to Analyze....")
  return (
    <>
    <h1 id="homee" className='text-7xl max-md:text-6xl font-bold  w-full h-96 text-center  p-24 uppercase max-sm:text-5xl max-sm:p-10 text-white'  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1543269664-7eef42226a21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat:"no-repeat"
    
  }}> Transform Text Instantly with a Click</h1>

    <div id='home' className="w-full pt-10  pb-12 h-full bg-zinc-200  flex flex-col justify-center items-center gap-3">
     

        <textarea name="text" id="text" value={text} onChange={handleOnchange}  className="resize-none bg-zinc-50 rounded-md p-2 border-2 border-zinc-700 w-full md:w-3/4 h-48 md:h-64"></textarea>
        <div className='flex gap-3 m-5 max-md:flex-col  '>
            <button onClick={uperchangehandler} className='bg-blue-500 p-2 text-white rounded-sm hover:rounded-lg hover:bg-blue-600'>Uppercase to conversion</button>
            <button onClick={lowerchangehandler} className='bg-blue-500 p-2 text-white rounded-sm hover:rounded-lg hover:bg-blue-600'>LowerCase conversion</button>
            <button onClick={captilxedhandler} className='bg-blue-500 p-2 text-white rounded-sm hover:rounded-lg hover:bg-blue-600'>Captilized text</button>
            <button onClick={removerhandler} className='bg-blue-500 p-2 text-white rounded-sm hover:rounded-lg hover:bg-blue-600'>Remove Text</button>
            <button onClick={removeextraspaces} className='bg-blue-500 p-2 text-white rounded-sm hover:rounded-lg hover:bg-blue-600'>Remove Extra space </button>
            <button onClick={reversetext} className='bg-blue-500 p-2 text-white rounded-sm hover:rounded-lg hover:bg-blue-600'>Text Reverse</button>
            <button onClick={copyToClipboard} className='bg-blue-500 p-2 text-white rounded-sm hover:rounded-lg hover:bg-blue-600'>copyToClipboard</button>
            <button onClick={speak} className='bg-blue-500 p-2 text-white rounded-sm hover:rounded-lg hover:bg-blue-600'>Speak</button>


        </div>
<div className='flex w-full h-full gap-5 justify-start flex-col px-24  max-sm:px-10'>
<h1 className='text-4xl font-bold  '>Your text summary is : </h1>
<div className='flex max-sm:flex-col gap-24 m-2 '>
<p className='text-2xl '> <span className='font-bold'>{text.split(" ").length}</span> words and  <span className='font-bold'>{text.length}</span> characters</p>
<p className='text-2xl '><span className='font-bold'>{.008 * text.length}</span> Minutes  read  </p>
</div>
<p className='text-4xl font-bold'>Priview your Text</p>
<p className='m-2 p-2 bg-zinc-400 rounded-md'>{text}</p>
</div>


    </div>
    </>
  )
}

export default Appfrom