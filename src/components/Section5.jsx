import React from 'react';
import './Section5.css';
import BG from '../assets/img/headphones-smartphone-dumbbells-crop.jpg'

function Section5() {
  return (
    <>
      <div className="my-5" style={{backgroundImage:{BG}, margin:"0"}}>
        <div className="p-5 text-center bg-body-tertiary">
          <div className="container py-5">
            <h1 className="text-body-emphasis" style={{paddingTop:"30px"}}>The <span style={{color:"#fac031", textDecoration:"underline"}}>Ultimate</span> Fitness App </h1>
            <p className="col-lg-8 mx-auto lead" style={{paddingTop:"30px"}}>
            "Unlock your full fitness potential with our app's cutting-edge features” 
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section5