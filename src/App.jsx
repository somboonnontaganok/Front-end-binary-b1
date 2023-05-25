import React from 'react'
import Layout from '../src/components/Layout';
import girl from './assets/img/girlEllipse.png';
import headPhone from './assets/img/component-on-page-1.png';
import acc from './assets/img/component-on-page-3.png'
import logo from './assets/img/Nest-fit.png';
import Section2 from '../src/components/Section2';
import Section3 from '../src/components/Section3';
import Section4 from '../src/components/Section4';
import Section5 from '../src/components/Section5';
import './App.css'

const App = () => {

  return (
    <>
      <Layout />
          <div className="container">
            <div style={{display:"flex", width:"30%", position:"absolute", bottom:"60%", right:"10%"}}>
              <h1 style={{color:"white",backgroundColor:"#fac031", padding:"12px"}}>N</h1>
              <h1 style={{color:"#fac031", padding:"12px", border:"2px solid #fac031"}}>E</h1>
              <h1 style={{color:"white",backgroundColor:"#fac031", padding:"12px"}}>S</h1>
              <h1 style={{color:"#fac031", padding:"12px", border:"2px solid #fac031"}}>T</h1>
              <h1 style={{color:"white",backgroundColor:"#fac031", padding:"12px"}}>F</h1>
              <h1 style={{color:"#fac031", padding:"12px", border:"2px solid #fac031"}}>I</h1>
              <h1 style={{color:"white",backgroundColor:"#fac031", padding:"12px"}}>T</h1>
            </div>
            <div>
              <img src={headPhone} style={{position:"absolute", right:"0", bottom:"0", width:"380px"}}></img>
              {/* <img src={acc} style={{position:"absolute", right:"35%", bottom:"58%", width:"270px"}}></img> */}
              <img src={logo} style={{position:"absolute", right:"19%", bottom:"50%", width:"80px"}}></img>
            </div>
            <div className="row flex-lg-row-reverse align-items-center g-5">
              <div className="col-10 col-sm-8 col-lg-6" style={{border:"2px solid #fac031", boxShadow:"10px 10px #fac031", borderRadius:"20px"}}>
                  <div className="d-flex align-items-end justify-content-between">
                      <h1 className="display-5 fw-bold lh-1 mb-3" style={{padding:"30px 0 30px 0"}}>What’s <span className="text-warning">Nest</span>Fit</h1>
                  </div>                  
                  <p className="lead">Welcome to NestFit - where fitness is fun! With our all-in-one features, state-of-the-art workouts, and a supportive community, achieving your fitness goals has never been more enjoyable. Let's unleash your potential together and start your fitness journey with NestFit today!</p>
                  </div>
                <div className="col-lg-6">
                  <img src={girl} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />     
                </div>
            </div>
          </div>
          <Section2/>
          <Section5/>
          <Section4/>
    </>
  )
}

export default App