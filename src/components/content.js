import React, { Component } from 'react';
import './content.css';
import axios from "axios"
import moment from "moment"

const apiKey = "44687f6f58184f6385947cb55a41ac62";
const baseUrl = "https://newsapi.org/v2/";
const urlEverything = baseUrl + "everything?" + "q=reactjs&" + "sortBy=publishedAt&" + "pagesize=20&" + "apiKey=" + apiKey;


class Content extends Component {

    state = {
        listNews: []
      };
      
      componentDidMount = () => {
        const self = this;
        axios({
          method: 'GET',
          url: urlEverything
        }).then(function(response) {
          self.setState({ listNews: response.data.articles });
          // handle success
          console.log(response.data.articles);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });

      };


    render() {
        
        const listNews = this.state.listNews

        return (
            <div>

        {/* if (item.urlToImage !== null && item.desciption !== null){
                        return () */}
                
                {listNews.filter((content) => content.urlToImage !== null && content.desciption !== null && content.author !== null ).map((item, key) => { 
                    
                        return (
                            <div>
                            <div className="card mb-3">
                                <img className="card-img-top" src={item.urlToImage} alt="Card image cap"></img>
                                <div className="card-body">
                                    <a className="title" href={item.url} target="_blank">
                                    <h4 className="card-title">{item.title}</h4>
                                    </a>
                                    <p className="card-text">oleh <i>{item.author}</i></p>
                                    <p className="card-text">{item.description}</p>
                                    <p className="card-text"><small className="text-muted">{moment(item.publishedAt, "YYYYMMDD").fromNow()}</small></p>
                                </div>
                                <div className="card-footer">
                                    <div className="row text-center">
                                        <div className="col-sm-4">
                                            <a className='love' href="#">
                                                <i className="far fa-heart"></i>
                                            </a>
                                        </div>
                                        <div className="col-sm-4">
                                            <a className='icon' href="#">
                                                <i className="fas fa-share-alt"></i>
                                            </a>
                                        </div>
                                        <div className="col-sm-4">
                                            <a className='icon' href="#">
                                                <i className="far fa-thumbs-down"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        )                
            })}
            </div>
          );
        }
      }

export default Content;