
import './App.css';
import headerimage from "./images/pattern-circles.svg"
import { useState, useEffect } from 'react';


function App() {

  const [value, setValue] = useState(50)
  const [pageviews, setPageviews] = useState("")
  const [price, setPrice] = useState('')

  const [checked, setChecked] = useState(false); 
  
  const handleToggle = () => { 
    
    setChecked(!checked);   
                  
  };

  const handleChange = (e) => {

    setValue(e.target.value)
      }

  useEffect(() => {

    if (value == 10)  {
      setPageviews("10K")
      setPrice(checked ? '6.00' : '8.00')
      
    } else if ( value == 30) {
      setPageviews("50K")
      setPrice(checked ? '9.00' : '12.00')
    } 
    else if (value == 50) {
      setPageviews("100K")
      setPrice(checked ? '12.00' : '16.00')
    } 
    else if (value == 70) {
      setPageviews("500K")
      setPrice(checked ? '18.00' : '24.00')
    } else 
    { setPageviews("1M")
    setPrice(checked ? '27.00' : '36.00')
    }
  }, [value, checked]);



    return (
    <>
      <header className="header">
        <h1>Simple, traffic-based pricing </h1>
        <p className='intparagraph'>Sign-up for our 30-day trial.<span className='nextline'> No credit card required. </span></p>
      </header>

      <img className='headerimage' src={headerimage} alt="headerimage"></img>

      <main className="container">

        <div className="top">
          <div className="pageviews" style={{ color: 'hsl(225, 20%, 60%)' }}>{pageviews} PAGEVIEWS</div>
          <div className="price"><span className='pricetag' style={{ color: 'hsl(227, 35%, 25%)' }}>${price}</span><span className="month">&nbsp;/month</span></div>
        </div>

        <div>
          <input type="range" min="10" max="90" value={value} className="mainslider" step="20" onChange={handleChange}>
         

          </input>
        </div>

        <div className="lineunderslider">
          <span>Monthly Billing</span>
          <span>
            <label className="switch">
              <input type="checkbox" onChange={handleToggle}></input>
              <span className="slider round"></span>
            </label>
          </span>
          <span>Yearly Billing</span><div className='discount'>25% discount</div><div className='discountmobile'>-25%</div>
        </div>

        <div className="bottom">
          <ul>
            <li>Unlimited websites</li>
            <li>100% data ownership</li>
            <li>Email reports</li>
          </ul>
          <button>Start my trial</button>

        </div>

      </main>


    </>
  );
}

export default App;
