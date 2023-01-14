import { useEffect, useRef } from 'react'
import './Intro.scss'
import { init } from 'ityped'
export default function Intro() {
  
  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, { 
      showCursor: true,
      backDelay:1000,
      backSpeed:50,
      strings: ["Developer", "Designer" , "Researcher"], 
      
    });
  },[]);
  
  return (
    <div className='Intro' id='Intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/raffffi.png" alt="" />
        </div>
      </div>
      <div className="right">
          <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Mustahsin Al Rafi</h1>
            <h3>Web <span ref={textRef}></span>
            </h3>
          </div>
          <a href="#Portfolio">
            <img src="assets/down.png" alt="" />
          </a>
      </div>

    </div>
  );
}
