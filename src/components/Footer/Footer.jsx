import React, { Component } from 'react';
import './FooterStyle.css'
class Footer extends Component {
   render() {
      return <footer className='text-center'>
         <div className="container">
            <div className="row">
               <div className="col-md-4">
                  <div className=''>
                     <h3>LOCATION</h3>
                     <p>2215 John Daniel Drive Clark, MO 65243</p>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className=''>
                     <h3>AROUND THE WEB</h3>
                     <ul className='list-unstyled d-flex p-0 justify-content-center gap-3'>
                        <li>
                           <a target='_blank' href="https://www.facebook.com/EINagy"><i className="fa-brands fa-facebook"></i></a>
                        </li>
                        <li>
                           <a target='_blank' href="https://twitter.com/nagyosama851"><i className="fa-brands fa-twitter"></i></a>
                        </li>
                        <li>
                           <a target='_blank' href="https://www.linkedin.com/in/nagy-osama"><i className="fa-brands fa-linkedin"></i></a>
                        </li>
                        <li>
                           <a target='_blank' href="https://www.facebook.com/EINagy"><i className="fa-solid fa-globe"></i></a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="col-md-4">
                  <div> 
                     <h3>ABOUT FREELANCER</h3>
                     <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                  </div>
               </div>
            </div>
         </div>
         <p className='Copyright py-4 mb-0'>Copyright © Your Website 2021</p>

      </footer>
   }
}

export default Footer;