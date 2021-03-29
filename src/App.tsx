import * as React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Card from './components/Card';
import Container from './components/Container';
import Input from './components/Input';

class App extends React.Component {

  public render(){
    return (
      <Container>
        <Card>
          <Input placeholder='Email' label="Email"/>
          <Input placeholder='Password' label="Password"/>
        </Card>
      </Container>
      
    );
  }
}


export default App;
