import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';
import Search from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import PageNotFound from './components/PageNotFound';

const key = apiKey;

class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    }
  }
  
  componentDidMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(err => {
        console.log('Error fetching and parsing data', err);
      })
  }

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(err => {
        console.log('Error fetching and parsing data', err);
      })
  }

  render() {
    console.log(this.state.photos);
    return (
      <BrowserRouter>
        <div className='container'>
          <Search onSearch={this.performSearch}/>
          <Nav />
          <div className='photo-container'>
            <Route path='/notfound' component={PageNotFound}/>
            {
              (this.state.loading)
              ? <p>Loading</p>
              : <PhotoContainer data={this.state.photos} />   
            }   
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
