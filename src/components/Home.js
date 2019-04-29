import React, { Component } from 'react';
import Header from './header';
import BGTEXT from './bgtext';
import HomeTop from './homeTop';
import HomeExplore from './homeExplore';
import HomeBlogPosts from './homeBlogPosts';
import blogPostsData from './data/blogPostsData';
import explorePostsData from './data/explorePostsData';
import slideshowData from './data/slideshowData';
import OurPurpose from './ourPurpose';
import InstafeedTarget from './instagramSec';
import YouTubeVids from './youtubeVids';
import Footer from './footer';


export default class Home extends Component {
  constructor() { 
    super()
    this.state = {
      term: 'none',
      explorePostsData,
      slideshowData
    }
  }

  render() {
    return (
      <div>
          <Header />
        <div className="clearfix"></div>
          <HomeTop slideshowData={this.state.slideshowData} />
        <div className="clearfix"></div>
        <section id="explore-home">
          <HomeExplore />
          <HomeBlogPosts explorePostsData={this.state.explorePostsData} />
          <OurPurpose />
          <Footer />
        </section>
      </div>
    );
  }
}
