import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Intro from './components/Intro'

class App extends React.Component {
  public render(){
    return (
      <div className="App">
        <Header />
        <Intro />
        <Intro text="bola"/>
      </div>
    );
  }
}

export default App;
