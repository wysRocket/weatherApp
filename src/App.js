import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import BodyContainer from './components/Body/BodyContainer';
import Search from './components/Search/Search';


function App() {
  return (
    <div className="App">
      <Header />
      <BodyContainer />
      <Search />
    </div>
  );
}

export default App;
