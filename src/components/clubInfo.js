import React from 'react';


const ClubInfo = () => {
    return (
        <div className="club-info">
            <div className="free-plants">
                <div className="free-plants-left fp2">
                    <div className="free-plants-heading">
                        <p>Free Plants</p>
                    </div>
                    <div className="free-plants-info">
                         <p>Yes seriously, we’re giving away houseplants.<br />
                            Every month we chose 3 lucky plant people at random<br />
                            and send a special houseplant right to their doorstep.</p>
                    </div>
                </div>
                <div className="free-plants-img-sec">
                    <img src="resources/img/art2.png" className="free-plants-img" />
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="first-look">
                <div className="first-look-img-sec">
                    <img src="resources/img/art3.png" className="first-look-img" />
                </div>
                <div className="first-look-right">
                    <div className="first-look-heading">
                        <p>First Look</p>
                    </div>
                    <div className="first-look-info">
                         <p>Be first in line for special announcements,<br />
                            random giveaways, and more plant fun.</p>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="plant-help">
                <div className="free-plants-left">
                    <div className="free-plants-heading">
                        <p>Plant Help</p>
                    </div>
                    <div className="free-plants-info">
                         <p>Get unlimited access to help from our<br />
                            plant experts. Send us a direct message <br />
                            and we'll help keep you and your plants happy.</p>
                    </div>
                </div>
                <div className="free-plants-img-sec">
                    <img src="resources/img/art1.png" className="free-plants-img" />
                </div>
            </div>
            <div className="clearfix"></div>
        </div>
    )
};

export default ClubInfo;