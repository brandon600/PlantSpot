import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


export default class BGTEXT extends Component {
    render() {
        return (
            <div className="home-bg-info">
                <div className="bg-header">
                    <h1>Join the Plant Club</h1>
                </div>
                <div className="bg-sub-head">
                    <h4>Bring more life to your life.</h4>
                </div>
                <div className="bg-checkout-div">
                    <ScrollAnimation animateIn="fadeInRight">
                    <div className="bg-checkout-btn">
                        <a class="check-it-a" href="/clubindex.php"><p className="bg-btn-text">CHECK IT OUT</p></a>
                    </div>
                    </ScrollAnimation>
                </div>
            </div>
        )
    }
}