import React from 'react';
import './App.css';
import Search from './components/SearchForm';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className='container'>
      <Search />
      <Nav />
    </div>
  );
}

export default App;
