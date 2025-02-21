import React, { Component } from 'react';
import page404 from './img/error-6482984_1280.png'
class NotFoundPage extends Component {
   render() {
      return <section id='notFound' className='h-100vh bg-main main-pt d-flex align-items-center justify-content-center'>
         <div className='text-center'>
         <h1 className='text-white mb-2 '>Page Not Found ... </h1>
         <img src={page404} className='w-25' alt="page not found" />
         </div>
      </section>
   }
}

export default NotFoundPage;