import React, { Component } from 'react';
import Home from './Home';
import Main from './Main.js';
import blogPostsData from './data/blogPostsData';

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Brandon',
            blogPostsData
        }
    }

    render() {
        return (
            <div>
            <Main />
            </div>
        );
    }
}