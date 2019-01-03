import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './css/index.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';

document.body.classList.add('app-background');

class App extends Component {
  render() {
    return (
      <div className="App">

      <Route exact path = '/' component = {Home} />
      <Route path = '/contact' component = {Contact} />

      <Footer />
      </div>
    );
  }
}

export default App;
