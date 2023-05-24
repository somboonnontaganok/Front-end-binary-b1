import React from 'react'
import Section3 from './Section3'

const Section2 = ()=> {
  return (
    <>
        <section className="second section bg-warning bg-gradient text-dark bg-opacity-10" width="100%">
        <div className="container text-center">
            <div className="row">
              <div className="col-1">
                
              </div>
              <div className="col-10">
                <h1 className="display-5 fw-bold" style={{margin:"70px"}}>Let’s <span className="text-warning">Get </span>Tired!</h1>
        <p className="lead">NestFit offers five types of home workouts, including weight lifting, yoga, HIIT, strength training, and pilates. 
            With our app, you can access a variety of workouts from the comfort of your own home - no gym required.
             Whether you're short on time or prefer working out at home, NestFit has got you covered.</p>
              </div>
              <Section3/>
            </div>
            
          </div>
        
    </section>
    </>
  )
}

export default Section2
