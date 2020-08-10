import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
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
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=trees&per_page=24&format=json&nojsoncallback=1`)
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

  showTrees = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=trees&per_page=24&format=json&nojsoncallback=1`)
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

  showSun = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=sun&per_page=24&format=json&nojsoncallback=1`)
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

  showOcean = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=ocean&per_page=24&format=json&nojsoncallback=1`)
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
    return (
      <BrowserRouter>
        <div className='container'>
          <Search onSearch={this.performSearch}/>
          <Nav />
          <div className='photo-container'>
            {
              (this.state.loading)
              ? <p>Loading</p>
              : <PhotoContainer data={this.state.photos} />   
            }   
          </div>
          <Switch>
            <Route exact path='/' > <Redirect to='/trees'></Redirect> </Route>
            <Route path='/trees' render={this.showTrees} />
            <Route path='/sun' render={this.showSun} />
            <Route path='/ocean' render={this.showOcean} />
            <Route component={PageNotFound}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
