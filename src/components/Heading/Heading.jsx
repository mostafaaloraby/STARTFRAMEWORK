import React, { Component } from 'react';
import './HeadingStyle.css';
class Heading extends Component {
   render() {
      return <div className={`heading text-center mb-2 ${this.props.color}`}>
      
      <h1 className='fw-bolder'>{this.props.text}</h1>
      <div className={`star position-relative ${this.props.color}`}>
         <i className="fa-solid fa-star"></i>
      </div>
      </div>
   }
}

export default Heading;