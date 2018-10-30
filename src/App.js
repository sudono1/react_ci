import React, { Component } from 'react';
import Menu from "./components/menu";
import Trending from "./components/trending";
import Content from "./components/content";
import Footer from "./components/footer"
import './App.css';

class App extends Component {  
  render() {    
    return (
      <div className="container">
        <Menu/>
          <div className="layout">
              <div className="row row-offcanvas row-offcanvas-right mt-5">
                  <div className="col-xs-12 col-sm-4 col-sm-pull-9 sidebar-offcanvas" id="sidebar">
                    <Trending/>
                  </div>
                      
                  <div className="col-xs-12 col-sm-8 col-sm-push-3">
                    <Content/>
                  </div>
              </div>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;