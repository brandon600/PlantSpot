import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';

const fadeImages = [
    'resources/img/plantprob2.png',
    'resources/img/8965.png',
    'resources/img/8970.png'
];

const fadeDesc = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae arcu eros. Integer ipsum nisi, interdum eget dapibus eget, malesuada sed nulla.',

    "If your plant is root bound like this one, it needs to be repotted, we'll show you how to do it the right way",

    'Check out our step by step guide on how to propogate your Pilea'
];


const fadeTitle = [
    'Plant Problems?',
    'Do your plants have room to grow',
    'Turn your plants into more plants, for free!'
];

const fadeButton = [
    'Join the club',
    'Watch Now',
    'Watch Now'
];

const fadeProperties = {
    duration: 4000,
    transitionDuration: 500,
    infinite: true,
    indicators: false
}

const fadeImgProps = {
    duration: 4000,
    transitionDuration: 500,
    infinite: true,
    indicators: true 
}

export default class HomeTop extends Component {
    constructor() {
    super()

    this.state = { 
        page: 'Home'
    }
}
    

    render() {
            return (
                <div className="home-top-sec">
                    <div className="col span-1-of-2 h-height">
                        <div className="problems-section">
                            <Fade {...fadeProperties}>
                            <div className="slide-img-heading">
                                <h2 className="plant-heading-title2">{fadeTitle[0]}</h2>
                            </div>
                            <div className="slide-img-heading">
                                <h2 id="plant-heading-title">{fadeTitle[1]}</h2>
                            </div>
                            <div className="slide-img-heading">
                                <h2 id="plant-heading-title">{fadeTitle[2]}</h2>
                            </div>
                            </Fade>
                            <Fade {...fadeProperties}>
                            <div className="problems-des-probs">
                                <p id="plant-heading-desc">{fadeDesc[0]}
                                </p>
                            </div>
                            <div className="problems-des">
                                <p id="plant-heading-desc">{fadeDesc[1]}
                                </p>
                            </div>
                            <div className="problems-des">
                                <p id="plant-heading-desc">{fadeDesc[2]}
                                </p>
                            </div>
                            </Fade>
                            <Fade {...fadeProperties}>
                            <div className="join-club-btn">
                                <div className="join-club-btn-text">
                                    <p className="sign-up-submit">{fadeButton[0]}</p>
                                </div>
                            </div>
                            <div className="join-club-btn">
                                <div className="join-club-btn-text">
                                    <p className="sign-up-submit">{fadeButton[1]}</p>
                                </div>
                            </div>
                            <div className="join-club-btn">
                                <div className="join-club-btn-text">
                                    <p className="sign-up-submit">{fadeButton[2]}</p>
                                </div>
                            </div>
                            </Fade>
                        </div>
                    </div>
                   
                    <div className="col span-1-of-2 home-top-img">
                    <Fade {...fadeImgProps}>
                        <div className="each-fade">
                            <div className="image-container">
                            <img className="main-home-img" src={fadeImages[0]} className="plant-prob-img" />
                            </div>
                        </div>
                        <div className="each-fade">
                            <img className="main-home-img" src={fadeImages[1]} className="plant-prob-img2" />
                        </div>
                        <div className="each-fade">
                            <img className="main-home-img" src={fadeImages[2]} className="plant-prob-img3" />
                        </div>
                    </Fade>
                    </div>
                    <div className="mobile-home-top">
                        <div className="mobile-top-img">
                            <img className="mobile-img-top" src='resources/img/8966.png' />
                        </div>
                        <div className="join-club-btn">
                                <div className="join-club-btn-text">
                                    <p className="sign-up-submit">{fadeButton[0]}</p>
                                </div>
                            </div>
                    </div>
                </div>
            )
    }
}