import React, { Component } from 'react';
import './PortioflioImgStyle.css'
class ProtoflioImg extends Component {
   openImg(e) {
      let imgSrc;
      if(e.target.classList.contains("overlay")) {
         imgSrc = e.target.nextElementSibling.src
      } else {
         imgSrc = e.target.parentNode.nextElementSibling.src
            }
            
document.querySelector("#img-open img").src = imgSrc
document.querySelector("#img-open").classList.remove("d-none")

            }
   render() {
      return <>
      <div className="col-md-6 col-lg-4">
      <div onClick={this.openImg}  className='img-holder position-relative'>
      <div className='overlay rounded-2 position-absolute w-100 h-100 d-flex justify-content-center align-items-center'>
         <i className="fa-solid fa-plus"></i>
      </div>
      <img  className='w-100 rounded-2' src={this.props.imgSource} alt="" />
      </div>
      </div>
      </>
   }
}

export default ProtoflioImg;