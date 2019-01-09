import {Link} from 'react-router-dom';
import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <section className= "nav-container">
            <div className="ml-auto">
              <div>
                <Link to="/portfolio" className="nav-link">PORTFOLIO</Link>
              </div>
              <div>
                <Link to="/investment" className="nav-link">INVESTMENT</Link>
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