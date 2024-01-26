import { useState } from "react";
import "./App.css";
import Quote from "./assets/quote.json";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

function App() {
  const getrandomQuote = () => {
    return quote[Math.floor(Math.random() * quote.length)];
  };

  const getrandomColor = () => {
    const red = Math.floor(Math.random() * 128);
    const green = Math.floor(Math.random() * 128);
    const blue = Math.floor(Math.random() * 128);

    return `rgb(${red}, ${green}, ${blue})`;
  };
  const style = { color: "white" };
  const tailwindColors = [
    'gray',
    'red',
    'yellow',
    'green',
    'blue',
    'indigo',
    'purple',
    'pink',
  ];

  const [color,setcolor]=useState('cyan')
  const [quote,setquote]=useState(Quote[0].quote);
  const handleclick=()=>
  {
     const rand=Math.floor(Math.random()*Quote.length);
      setquote(Quote[rand].quote);
      console.log(quote);
  }

  return (
    <>
    
  
    <div className="flex items-center justify-center py-[15%] overflow-hidden" >
      <div className=" bg-emerald-400 rounded-lg border-white border-2 h-auto w-[60%] shadow-lg shadow-emerald-600 py-6 opacity-80">
        <div className="text flex  justify-center top-0">
          <div className="text font-bold font-serif text-black text-center py-16 px-2 text-4xl text-balance flex  ">
            " {quote}"
          </div>
        </div>
        <div className="buttons flex justify-center items-center">
        <div className="Buttons bg-emerald-600  h-10 w-32 rounded-lg flex justify-center items-center mx-9 shadow-md border-white border-2 shadow-cyan-500 ">
          Tweet
        </div>
        <div className= "Buttons bg-emerald-600  h-10 w-32 rounded-lg flex justify-center items-center mx-9 shadow-md border-white border-2 shadow-teal-500 " onClick={handleclick}>
          Next
        </div>
        </div>
        
      </div>
    </div>
    </>
  );
}

export default App;
