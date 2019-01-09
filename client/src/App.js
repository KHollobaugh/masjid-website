import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

document.body.classList.add('app-background');

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation />
      <Route exact path = '/' component = {Home} />
      <Route path = '/contact' component = {Contact} />
      <Footer />
      </div>
    );
  }
}

export default App;
