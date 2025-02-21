import React, { Component } from 'react';
import img1 from './imgs/poert1.png'
import img2 from './imgs/port2.png'
import img3 from './imgs/port3.png'
import img4 from './imgs/port4.png'
import img5 from './imgs/port5.png'
import img6 from './imgs/port6.png'
import Heading from '../Heading/Heading';
import ProtoflioImg from '../PortoflioImg/ProtoflioImg';

class Portfolio extends Component {
   state ={
         imgs: [img1 , img2 , img3 , img4 , img5 , img6]
   }
   closeImg(e) {
      if(e.target.getAttribute("id") == "img-open")
      document.querySelector("#img-open").classList.add("d-none")
   }
   render() {
      return <>
      <section className='p-top pb-4'>
         <div className="container">
            <Heading color="black" text="PORTFOLIO COMPONENT"/>
            <div className="row g-5">
               {this.state.imgs.map(function(img , index) { return <ProtoflioImg key={index} imgSource={img}/>})}
               <div onClick={this.closeImg} id="img-open" className='d-none w-100 bg-info bg-opacity-25 vh-100 m-0 fixed-top d-flex justify-content-center align-items-center'>
                  <img className='w-50' src="" alt="" />
               </div>
            </div>
         </div>
         
      </section>
      </>
   }
}

export default Portfolio;