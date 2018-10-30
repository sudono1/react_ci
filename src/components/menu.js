import React, { Component } from 'react';
import './menu.css';
import logo from "../logo.svg"

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
      
        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
          
          <img src={logo} className="img-logo-brand"></img>

          <a className="navbar-brand" href="#">KabarKabar</a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#">Sepakbola</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Ekonomi</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Politik</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Hiburan</a></li>
              <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Lainnya</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Internasional</a>
                  <a className="dropdown-item" href="#">Regional</a>
                  <a className="dropdown-item" href="#">Viral</a>
                </div>
              </li>
            </ul>  
          </div>
  
          <div>  
            <input className="form-control" type="text" placeholder=" Search"></input>  
          </div>
          <div>
            <button className="btn" type="submit"><img className="search-button" src="https://static.thenounproject.com/png/14173-200.png"></img></button>
          </div>    

          <div className="collapse navbar-collapse justify-content-center" id="login">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#">Masuk</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Daftar</a></li>
            </ul>
          </div>

        </nav>
      </div>
    );
  }
}

export default Menu;