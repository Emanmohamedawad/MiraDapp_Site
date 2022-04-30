import React from 'react'
import './About.css';
import About_me from '../../assets/about-img.jpg';

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>Collection Store</h2>
      <div className='contaniner about__container'>
        <div className='about__me'>
            <div className='about__me-image'>
              <img src={About_me} alt='about_image' />
            </div>
        </div>
        <div className='about__content'>
          <p>
             "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
