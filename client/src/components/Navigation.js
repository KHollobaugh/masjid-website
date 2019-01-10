import {Link} from 'react-router-dom';
import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <section className= "nav-container">
        <div>
            <h2>Matrimonial Service</h2>
            <h1>Islamic Center of Greater Lansing</h1>
        </div>
            <div className="ml-auto">
            
              <div>
                <Link to="/about" className="nav-link">ABOUT</Link>
              </div>
              <div>
                <Link to="/apply" className="nav-link">APPLY</Link>
              </div>
              <div>
                <Link to="/contact" className="nav-link">CONTACT</Link>
              </div>
            </div>
        </section>
      </div>
    );
  }
}

export default Navigation;