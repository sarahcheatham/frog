import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Background from './components/Background/Background';
import Inspiration from './components/Inspiration/Inspiration';
import Design from './components/Design/Design';
import Future from './components/Future/Future';
import Frog from './components/Frog/Frog';
import PassionProject from './components/PassionProject/PassionProject';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Background/>
        <Inspiration/>
        <Design/>
        {/* <Future/> */}
        <Frog/>
        <PassionProject/>
      </div>
    );
  }
}

export default App;
