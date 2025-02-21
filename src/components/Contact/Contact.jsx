import React, { Component } from 'react';
import Heading from './../Heading/Heading';
import Input from '../Input/Input';

class Contact extends Component {
   state = {
      inputs: [
         {text: "userName" , type:"text"},
         {text: "userAge" , type:"number"},
         {text: "userEmail" , type:"email"},
         {text: "userPassword" , type:"Password"},
   ]
   }
   componentDidMount() {
      document.forms[0].onsubmit = function(e) {
         e.preventDefault()
      }
   }

   render() {
      return <section className='p-top mb-4 vh-100'>
      <Heading color="black" text="CONATCT SECTION"/>
      <form action="" className='w-50 mx-auto'>
         {this.state.inputs.map(function(inp , inx){return <Input key={inx} text={inp.text} type={inp.type}/>})}
         <button className='border-0 p-2 rounded-2 bg-main text-white '>send massage</button>
      </form>
      </section>
   }
}

export default Contact;