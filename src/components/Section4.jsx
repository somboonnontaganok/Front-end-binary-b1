import React from 'react'
import wa from '../assets/img/workout-analytic.png';
import cwo from '../assets/img/close-up-man-exercising-after-online-instructor.jpg';
import sis from '../assets/img/overlay_hitt-guide.jpeg';

const Section4 = () => {
  return (
    <>
        <div className="forth-one-section">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5 mx-auto mb-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={wa} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />  
                </div>
                <div className="col-lg-6">
                    <div className="d-flex align-items-end justify-content-between">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Workout <span className="text-warning">Analytics</span></h1>
                    </div>
                    
                    <p>Welcome to NestFit - where fitness is fun! With our all-in-one features, state-of-the-art workouts, and a supportive community, achieving your fitness goals has never been more enjoyable. Let's unleash your potential together and start your fitness journey with NestFit today!</p>
                    
                </div>
            </div>
        </div>
        <div className="forth-two-section bg-warning bg-gradient text-dark bg-opacity-10">
            <div className="row flex-lg-row-reverse align-items-center g-5 pb-5 mx-auto ">
                <div className="col-10 col-sm-8 col-lg-6">
                    <div className="d-flex align-items-end justify-content-between">
                        <h1 className="display-5 fw-bold lh-1 mb-3"><span className="text-warning">Connect </span>with Others</h1>
                    </div>
                    <ul>
                        <li>Access to a community of like-minded fitness enthusiasts</li>
                        <li>Get support and encouragement from your connections to stay on track</li>
                        <li>Discover new workout routines, tips, and ideas from other users to spice up your fitness routine.</li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <img src={cwo} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />     
                </div>
            </div>
        </div>
        <div className="forth-three-section">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5 mx-auto">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={sis} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />  
                </div>
                <div className="col-lg-6">
                    <div className="d-flex align-items-end justify-content-between">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Stay In  <span className="text-warning">Shape</span></h1>
                    </div>
                    <ul >
                        <li>Maintain your fitness routine and stay motivated to achieve your goals</li>
                        <li>Integration with devices to track your progress and keep you active</li>
                        <li>Stick to your fitness journey and continue to improve your health and well-being</li>
                    </ul>   
                </div>
            </div>
        </div>
    </>
  )
}

export default Section4
