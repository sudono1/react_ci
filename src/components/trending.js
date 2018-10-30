import React, { Component } from 'react';
import './trending.css';
import axios from "axios"

const apiKey = "44687f6f58184f6385947cb55a41ac62";
const baseUrl = "https://newsapi.org/v2/";
const urlTopHeadline = baseUrl + "top-headlines?" + "country=id&" + "pagesize=10&" + "apiKey=" + apiKey;

class Trending extends Component {
    
    state = {
        trendingNews: []
      };
      
      componentDidMount = () => {
        
        const self = this;
    
        axios({
          method: 'GET',
          url: urlTopHeadline
        }).then(function(response) {
          self.setState({ trendingNews: response.data.articles });
          // handle success
          console.log(response.data.articles);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
      };    
    
    render() {

        const trendingNews = this.state.trendingNews

      return (
        <div className="list-group">
            <a href="#" className="list-group-item">
            <strong>BERITA TERKINI</strong>
            <span className="float-right view-all">lihat semua</span></a>
            
            {trendingNews.map((item, key) => {

                return (
                    <div>
                        <a href={item.url} className="list-group-item" target="_blank">
                        <span className="badge badge-pill badge-danger">#{key + 1}</span>
                        <br></br>
                        {item.title}</a> 
                    </div>
                ) 
        })}
        </div>
      );
    }
  }

export default Trending;