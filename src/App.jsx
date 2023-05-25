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
import smallcircle from './assets/img/small-circle.png';
import './App.css'

const App = () => {

  return (
    <>
      <Layout />
          <div className="container">
            <div style={{display:"flex", width:"30%", position:"absolute", bottom:"62%", right:"19%"}}>
              <p style={{fontWeight:"bold", fontSize:"25px",color:"white", backgroundColor:"#fac031", padding:"10px 20px", borderRadius:"10px"}}>Welcome to,</p>
            </div>
            <div>
              <img src={headPhone} style={{position:"absolute", right:"0", bottom:"0", width:"380px"}}></img>
              {/* <img src={acc} style={{position:"absolute", right:"35%", bottom:"58%", width:"270px"}}></img> */}
              <img src={logo} style={{position:"absolute", right:"21%", bottom:"47%", width:"130px"}}></img>
              <img src={smallcircle} style={{position:"absolute", right:"5%", bottom:"75%", width:"100px"}}></img>
              <img src={smallcircle} style={{position:"absolute", right:"5%", bottom:"65%", width:"200px"}}></img>
            </div>
            <div className="row flex-lg-row-reverse align-items-center g-5">
              <div className="col-10 col-sm-8 col-lg-6" 
              // style={{border:"2px solid #fac031", boxShadow:"10px 10px #fac031", borderRadius:"20px"}}
              >
                  <div className="d-flex align-items-end justify-content-between">
                      <h1 className="display-5 fw-bold lh-1 mb-3" style={{padding:"30px 0 30px 0px", fontSize:"80px"}}>Nest<span className="text-warning">Fit</span></h1>
                  </div>                  
                  <p className="lead">Where fitness is fun! With our all-in-one features, state-of-the-art workouts, and a supportive community, achieving your fitness goals has never been more enjoyable. Let's unleash your potential together and start your fitness journey with NestFit today!</p>
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