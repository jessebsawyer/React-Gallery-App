// Import Files
import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';
import Search from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import PageNotFound from './components/PageNotFound';


// API Key 
const key = apiKey;

// App Component Calls Fetches API's and Renders Main Components
class App extends Component {

  constructor() {
    super();
    this.state = {
      treePhotos: [],
      sunPhotos: [],
      oceanPhotos: [],
      searchPhotos: [],
      loading: true
    }
  }
  
  componentDidMount() {
    this.showTrees();
    this.showSun();
    this.showOcean();
  }

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          searchPhotos: response.data.photos.photo,
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
          treePhotos: response.data.photos.photo,
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
          sunPhotos: response.data.photos.photo,
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
          oceanPhotos: response.data.photos.photo,
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
          <Switch>
            <Route exact path='/' > <Redirect to='/trees'></Redirect> </Route>
            <Route path='/trees' render={ () => <PhotoContainer data={this.state.treePhotos} loading={this.state.loading} />} />
            <Route path='/sun' render={ () => <PhotoContainer data={this.state.sunPhotos} loading={this.state.loading} />} />
            <Route path='/ocean' render={ () => <PhotoContainer data={this.state.oceanPhotos} loading={this.state.loading} />} />
            <Route path='/search/:topic' render={ () => <PhotoContainer data={this.state.searchPhotos} loading={this.state.loading} />} />
            <Route component={PageNotFound}></Route>
          </Switch>
          </div>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
