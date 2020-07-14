import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Search from './components/SearchForm';
import Nav from './components/Nav';
import Photo from './components/Photo';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Search />
        <Nav />
        <Photo />    
      </div>
    </BrowserRouter>
  );
}

export default App;
