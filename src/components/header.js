import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
      return (
        <div className="header">
          <div className="col span-1-of-5">
          <div className="search-bar-div">
            <input type="text" name="search" className="search-bar" placeholder="Search" />
          </div>
          </div>
            <div className="col span-2-of-5 responsive-heading-item">
            <a href="/clubindexC.php"><h3 className="club-heading">CLUB</h3></a>
          </div>
          <div className="col span-2-of-5 responsive-heading-item">
            <Link to ="/exploration-zone"><h3 className="explore-heading">EXPLORE</h3></Link>
          </div>
            <div className="col span-1-of-4">
            </div>
            <div className="clearfix"></div>
            <div className="header-line"></div>
        </div>
      );
    }
  }
