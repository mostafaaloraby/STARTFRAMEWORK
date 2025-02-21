import React, { Component } from 'react';
import avatar from './img/avataaars.svg'
import Heading from '../Heading/Heading';
class Home extends Component {
   render() {
      return <section id='home' className='d-flex justify-content-center align-items-center bg-main h-100vh main-pt'>
      <div className="content text-center">
         <img src={avatar} className='w-65 mb-5' alt="avater" />
         <Heading color="white" text="START FRAMEWORK"/>
         <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
      
      </section>
   }
}

export default Home;