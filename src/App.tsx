import './App.css'
import { useEffect, useState } from 'react'
import dice from './assets/icon-dice.svg'
import patternMobile from './assets/pattern-divider-mobile.svg'



function App() {
  const [data, setData] = useState<responseData>({
      slip:  {
          id: 0,
          advice: ''
      }
  });

  interface responseData {
      slip: {
          id: number,
          advice: string,
      },
  }

  const handleClick = () =>{
    fetch('https://api.adviceslip.com/advice').then(res => res.json()).then(data=> setData(data))
    console.log(data);
  }

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice').then(res => res.json()).then(data=> setData(data))
  },[])

  return (
    <div className='app'>
      <section className='container'>
              <span>ADVICE #{data.slip.id}</span>
              <p>{data.slip.advice}</p>
              <div className='images'>
                  <img src={patternMobile} alt="" />
              </div>    
                <button
                  className='btn'
                  onClick={handleClick}> 
                  <img src={dice} alt="" /> 
                </button>
                <footer id='footer'>
                  <span >Coded By KevenDev</span>
                </footer>
      </section>
    </div>
  )
}

export default App


