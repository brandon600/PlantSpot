import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer-line"></div>
                <div className="social-media-icons">
                    <img src="resources/img/insta-icon.png" className="footer-icons1" />
                    <img src="resources/img/insta-icon.png" className="footer-icons" />
                </div>
                <div className="footer-bottom">
                    <div className="col span-1-of-3 hh">
                        <p>Somethings</p>
                    </div>
                    <div className="col span-1-of-3">
                        <p className="footer-join">Join The club</p>
                    </div>
                    <div className="col span-1-of-3">
                        <p className="footer-rights">All rights reserved, 2018</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer;