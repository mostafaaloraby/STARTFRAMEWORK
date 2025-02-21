import React, { Component } from 'react';
import './InputStyle.css'
class Input extends Component {
   labelUp(e) {
      let label = e.target.nextElementSibling
      if(e.target.value) {
         label.style.opacity = 1
         label.style.top = "-80px"
      } else {
         label.style.opacity = 0
         label.style.top = "-50px"
      }
   }
   render() {
      let {text , type} = this.props
      return <>
      <input onInput={this.labelUp}  className='mb-3 position-relative border-bottom p-2 mx-auto d-block w-100 ' placeholder={text}  type={type} name={text} id={text}/>
      <label htmlFor={text}>{text + " :"}</label>
      </>
   }
}

export default Input;