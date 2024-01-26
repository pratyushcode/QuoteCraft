import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ParticlesBg from "particles-bg";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App />
    <ParticlesBg type="circle"  bg={true} className="z-10 opacity-15">   </ParticlesBg>
    
   
 
  </React.StrictMode>,
)
