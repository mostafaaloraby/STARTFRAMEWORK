import React, { Component } from 'react';
import NavBar from './../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

class Layout extends Component {
   render() {
      return <>
      <NavBar/>

      <Outlet/>
      
      <Footer/>
      
      </>
   }
}

export default Layout;