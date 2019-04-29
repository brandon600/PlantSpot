import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class YouTubeVids extends Component {
    constructor() {
        super()
        this.state = { page: 'Home'}
        this.renderVideos = this.renderVideos.bind(this);
    }

    renderVideos() {
        var {youtubeVideoData} = this.props

        if(youtubeVideoData == undefined || youtubeVideoData.length == 0) {
            return "There are no videos posts to show."
        }

        return youtubeVideoData.map((post, index) => {
            return (
                <div className="yt-vid col span-1-of-3">
                <iframe width="250" height="150" src={post.embedurl} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <p>This is the video title.</p>
                </div>
                )
        })


    }

    render() {
        return (
            <div>
                <ScrollAnimation animateIn="fadeInLeft">
                <div className="youtube-section flash">
                {this.renderVideos()}
                </div>
                </ScrollAnimation>
            </div>
        )
    }
}
