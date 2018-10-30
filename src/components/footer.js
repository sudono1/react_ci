import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
      return (
    <div className="footer">
        <div className="container">
            <p className="text-center"> © Sudono 2018
            <span> | Grow | Winner | Customer | Positive | Integrity | Lead | Fun</span>
            <span><a className='icons' href="#"><i className="fab fa-instagram"></i></a></span>
            <span><a className='icons' href="#"><i className="fab fa-twitter"></i></a></span>
            <span><a className='icons' href="#"><i className="fab fa-facebook-f"></i></a></span>
            </p>            
        </div>
    </div>
      );
    }
  }

export default Footer;