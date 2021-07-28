import React from 'react';
import web from '../src/img/3.jpeg'
import Common from './Common';

const Home = () => {
  return (
    <Common 
     name='Grow your business with'
     imgsrc={web}
     btnname='Get Started' 
     path='/service'
     />
  )
}

export default Home;
