import * as React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Login from './conteiners/Auth/Login';
import Register from './conteiners/Auth/Register';
import NewsFeed from './conteiners/NewsFeed';
import Navbar from './components/Navbar';
import { Route } from 'react-router';

class App extends React.Component {

  public render(){
    return (
      <div>
        <Route exact={true} path='/' component={Login}/>
        <Route exact={true} path='/register' component={Register}/>
        <Route path='/app' component={Navbar}/>
        <Route exact={true} path='/app/newsfeed' component={NewsFeed}/>
        
      </div>
      
    );
  }
}


export default App;
