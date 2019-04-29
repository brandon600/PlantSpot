import React, { Component } from 'react';
import Header from './header';
import ClubSignUp from './clubSignUp';
import ClubInfo from './clubInfo';
import featuredPostsData from './data/featuredPostsData';
import ClubFeaturedPosts from './clubFeaturedPosts';
import Footer from './footer';

export default class Club extends Component {
    constructor() {
        super()
        this.state = {
          term: 'none',
          featuredPostsData
        }
      }
        render() {
        return (
            <div>
            <Header />
            <ClubSignUp />
            <ClubInfo />
            <ClubFeaturedPosts featuredPostsData={this.state.featuredPostsData}/>
            <Footer />
            </div>
        );
    }
}
