import React from 'react';
import hiit from '../assets/img/HIIT-card.jpg';
import wt from '../assets/img/Weight training-card.jpg';
import st from '../assets/img/Strangth training-card.jpg';
import pt from '../assets/img/Pilates-card.jpg';
import yt from '../assets/img/Yoga-card.jpg';
import Carousel from 'react-bootstrap/Carousel';
import './Section3.css';

const Section3 = () => {
  return (
    <>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={hiit}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>HIIT</h3>
              <p>High-Intensity Interval Training (HIIT) is a type of workout that alternates between intense bursts of activity and brief rest periods</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={wt}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Strength Training</h3>
              <p>Strength training is a type of exercise that focuses on building muscular strength and endurance, improving bone density, and boosting metabolism</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={st}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Weight Training</h3>
              <p>
              Weight training involves using resistance to build strength, increase muscle mass, and improve overall fitness
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={pt}
              alt="Fourth slide"
            />

            <Carousel.Caption>
              <h3>Pilates</h3>
              <p>
              Pilates is a low-impact form of exercise that focuses on strengthening and lengthening your muscles, improving flexibility, and enhancing your mind-body connection
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={yt}
              alt="Fifth slide"
            />

            <Carousel.Caption>
              <h3>Yoga</h3>
              <p>
              Yoga is a mind-body practice that combines physical postures, breathing techniques, and meditation to help you reduce stress, improve flexibility, and build strength
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </>
  )
}

export default Section3