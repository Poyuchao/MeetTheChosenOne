import React from 'react'
import '../css/Home.css';
import Navbar from '../Navbar';




function Home() {
  return (
    <div className="home-container">
        <div className="home-inner-container">
          <Navbar />
            <div className="title-container">
              <img src="/img/love-emoji.png" alt="love-emoji" className="Love-emoji"></img>
              <h1 className="home-heading-1">Meet the</h1>
              <h1 className="home-heading-2">Chosen one</h1>
             
            </div>
            
            <div className="hero-image-container">
              <img src="/img/shape-line.png" alt="shape-line" className="shape-line"></img>
              <img src="/img/Group-4.png" alt="Group-4" className="Group-4"></img>
              <img src="/img/hi.png" alt="hi" className="Hi"></img>   
              <img src="/img/Group-2.png" alt="Group-2" className="Group-2"></img>   
              <img src="/img/photo-beautiful-afro-american-woman.png" alt="woman" className="hero-image" />
              <div class="gray-circle"></div>
            </div>
            <div class="ellipse-wrapper">
              <div class="rotated-ellipse-orange"></div>
              <div class="rotated-ellipse-green"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="1439" height="217" viewBox="0 0 1439 217" fill="none" className="rotated-ellipse-gray">
                <path d="M1621 374C1621 167.998 1217.38 1 719.5 1C221.615 1 -182 167.998 -182 374" stroke="#545454"/>
              </svg>
            </div>
        </div>

    </div>
  )
}

export default Home
