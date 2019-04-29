import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ScrollAnimation from 'react-animate-on-scroll';

export default class HomeBlogPosts extends Component {
    constructor() {
        super()
        this.state = { page: 'Home' }
        this.loopPosts = this.loopPosts.bind(this);
    }


    loopPosts() {
        var {explorePostsData} = this.props


        if(explorePostsData == undefined || explorePostsData.length == 0) {
            return "There are not blog posts to show."
        }

    return explorePostsData.map((post, index) => {
        return (
        <div className="blog-bg mobile-blog-bg">
        <ScrollAnimation animateIn="fadeIn" animateOnce="true">
        <div className="col span-1-of-3 post-main e-c" key={index}>
                        <div className="post3">
                            <div className="post-info">
                                <div className="post-image-div">
                                    <img src={post.img} className="post-image3" />
                                </div>
                                <div className="details">
                                    <div className="post-details3">
                                        <p className="post-category3">{post.category}</p>
                                        <p className="post-title3">{post.title}</p>
                                        <div className="title-underline"></div>
                                        <p className="post-subhead3">{post.subhead}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </ScrollAnimation>
        </div>)
    })

}

    render() {
        return (
            <div className="blog-big-sec">
            {this.loopPosts()}
            <div className="clearfix"></div>
            <div className="mobile-blog-sec">
                <div className="col span-1-of-2 mobile-col2">
                    <div className="mobile-post">
                        <div className="mobile-post-info">
                            <div className="mobile-post-img">
                                <img src="resources/img/blog1.jpg" className="mobile-post-img3">
                                </img>
                            </div>
                            <div className="mobile-b-details">
                                <div className="mobile-details3">
                                    <p className="mobile-p-category">Basic</p>
                                    <p className="mobile-p-title">Watering Your Houseplants the Right Way</p>
                                    <div className="mobile-p-underline"></div>
                                    <p className="mobile-p-subhead">Follow this step-by-step guide to keeping your houseplants happy and healthy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col span-1-of-2 mobile-col2">
                    <div className="mobile-post">
                        <div className="mobile-post-info">
                            <div className="mobile-post-img">
                                <img src="resources/img/blog1.jpg" className="mobile-post-img3">
                                </img>
                            </div>
                            <div className="mobile-b-details">
                                <div className="mobile-details3">
                                    <p className="mobile-p-category">Basic</p>
                                    <p className="mobile-p-title">How to keep your houseplants happy.</p>
                                    <div className="mobile-p-underline"></div>
                                    <p className="mobile-p-subhead">Follow this step-by-step guide to keeping your houseplants happy and healthy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="view-all">
            <p className="view-all-text"><a href="#">View All</a></p>
            </div>
            </div>
        )
    }

}
