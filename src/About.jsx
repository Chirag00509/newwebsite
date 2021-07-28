import React from 'react';
import web from '../src/img/about.jpeg'
import Common from './Common';

const About = () => {
  return(
    <Common 
     name='Welcome to About page'
     imgsrc={web}
     btnname='Contact Now' 
     path='/contact'
     />
  )
}

export default About;
