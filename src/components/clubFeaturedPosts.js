import React, { Component } from 'react';

export default class ClubFeaturedPosts extends Component {
    constructor() {
        super()
        this.state = { page: "Club" }
        this.loopClubPosts = this.loopClubPosts.bind(this);
    }

    loopClubPosts() {

    var {featuredPostsData} = this.props

    if(featuredPostsData == undefined || featuredPostsData == 0) {
        return "There are not featured blog posts to be displayed"
    }

    return featuredPostsData.map((post, index) => {
        return (
            <div className="blog-bg mgt">
            <div className="col span-1-of-3" key={index}>
                <div className="post2">
                    <div className="post-info">
                        <div className="post-image-div">
                            <img src={post.img} class="post-image2" />
                        </div>
                        <div className="details">
                            <div className="post-details">
                                <p className="post-title2">{post.title}</p>
                                <p className="post-subhead2">{post.subhead}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>)
    })

    }

    render() {
        return (
            <div>
                <div className="club-posts-head">
                    <p>Featured Posts</p>
                </div>
                {this.loopClubPosts()}
                <div className="clearfix"></div>
            </div>
        )
    }
}