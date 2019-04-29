import React, { Component } from 'react';
import Header from './header';
import ExplorationTop from './explorationTop';
import Footer from './footer';



export default class ExplorationZone extends Component {
    constructor() {
        super()
        this.state = {
          term: 'none'
        }
      }






        render() {
        return (
            <div>
            <Header />
            <ExplorationTop />
            <div className="clearfix"></div>
            <Footer />
            </div>
        );
    }
}