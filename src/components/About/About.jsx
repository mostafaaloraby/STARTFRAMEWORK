import React, { Component } from 'react';
import Heading from '../Heading/Heading';

class About extends Component {
   render() {
      return <section id='about' className=' d-flex justify-content-center align-items-center bg-main main-pt h-100vh'>
         <div className="container">
      <div className="row px-5 text-white">
      <div className="col-md-12 ">
         <div className='mb-3'>
            <Heading color="white" text="ABOUT COMPONENT"/>
         </div>
         </div>
         <div className="col-md-6">
            <div>
               <p>
                  Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
               </p>
            </div>
         </div>
         <div className="col-md-6">
            <div>
               <p>
                  Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
               </p>
            </div>
         </div>
      </div>
         </div>
      </section>
   }
}

export default About;