import React, { Component } from 'react';
import './NavStyle.css'
import { Link } from 'react-router-dom';
class NavBar extends Component {
  removeAllActive() {
      document.querySelectorAll(".nav-link").forEach((e)=> {
      e.classList.remove("active")
    })
    document.title = "HOME"
  }
  setActive(e) {
    document.querySelectorAll(".nav-link").forEach((e)=> {
      e.classList.remove("active")
    })
    e.target.classList.add("active")
    document.title = e.target.textContent
  }
  componentDidMount() {
    let nav = document.querySelector(".my-nav")
    window.onscroll = function() {
      if(window.scrollY !== 0) {
        
          nav.style.paddingBlock = "10px"
        
      } else {
          nav.style.paddingBlock = "25px"
      }
    } 
  }
  render() {
      return <>
<nav className="navbar navbar-expand-lg bg-body-tertiary my-nav fixed-top">
  <div className="container">
    <Link to={"/"} onClick={this.removeAllActive} className="navbar-brand fs-2">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={"/ABOUT"} onClick={this.setActive} className="nav-link ">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link to={"/PORTFOLIO"} onClick={this.setActive} className="nav-link ">PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link to={"/CONTACT"} onClick={this.setActive} className="nav-link ">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </>
  }
}

export default NavBar;