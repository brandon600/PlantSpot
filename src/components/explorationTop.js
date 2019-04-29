import React, { Component } from 'react';
import blogPostsData from './data/blogPostsData';
import ScrollAnimation from 'react-animate-on-scroll';


export default class ExplorationTop extends Component {
    constructor() {
        super()
        this.state = {
            page: 'ExplorationZone',
            zone: 'All',
            blogPostsData

    }
        this.change = this.change.bind(this);
    }

    change(event) {
        var name = event.target.name
        var value = event.target.id

        this.setState({
            zone: value
        }, () => {
            console.log(this.state)

            this.filteredPosts()
        })
    }

    filteredPosts() {
        var newVal = this.state.zone
       return blogPostsData.map((post, index) => {

            if(newVal == 'All') {
                return (
                    <div className="blog-bg">
                    <div className="col span-1-of-3 post-main e-c" key={index}>
                        <div className="post3">
                            <div className="post-info">
                                <div className="post-image-div">
                                    <img src={post.img} class="post-image3" />
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
                    </div>
                )
            } else if(post.category == newVal) {
                return (
                    <div className="blog-bg">
                    <div className="col span-1-of-3 post-main e-c" key={index}>
                        <div className="post3">
                            <div className="post-info">
                                <div className="post-image-div">
                                    <img src={post.img} class="post-image3" />
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
                    </div>
                )
            }
        })
    }



    render() {
        return (
            <div>
                <div>
                    <div className="clearfix"></div>
                    <div className="col span-1-of-4 e-c mobile-ec">
                        <img src="resources/img/monstera.png" className="exploration-leaf-left" />
                    </div>
                    <div className="col span-2-of-4 explore-welcome e-c">
                        <p className="explore-z-text">Exploration Zone</p>
                    </div>
                    <div className="col span-1-of-4 e-c mobile-ec">
                        <img src="resources/img/aralia-leaf.png" className="exploration-leaf-right" />
                    </div>
                </div>
                <div className="clearfix"></div>
                <div id="explore-selector">
                    <ul className="explore-list">
                        <li id="News" className="li-border" onClick={this.change}>*Featured</li>
                        <li id="All" className="li-border el-li" onClick={this.change}>All</li>
                        <li id="Basics" className="li-border el-li" onClick={this.change}>Basics</li>
                        <li id="Care" className="li-border el-li" onClick={this.change}>Care</li>
                        <li id="Fun" className="el-li" onClick={this.change}>Fun/DIY</li>
                    </ul>
                </div>
                <div className="clearfix"></div>
                <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                {this.filteredPosts()}
                </ScrollAnimation>
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
            </div>
        )
    }

}
