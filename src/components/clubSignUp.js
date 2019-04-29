import React, { Component } from 'react';

export default class ClubSignUp extends Component {
    render() {
    return (
        <div>
        <div className="club-top">
            <p className="club-head">Welcome to The Plant Club</p>
        </div>
        <div className="club-sign-up">
            <div className="sign-up-fields">
                    <img src="resources/img/name-icon.png" className="sign-up-icons" />
                <div className="input-div">
                    <input type="text" name="name" className="input-name" placeholder="Full Name" />
                </div>
            </div>
            <div className="sign-up-fields">
                    <img src="resources/img/number-icon.png" className="sign-up-icons" />
                <div className="input-div">
                    <input type="text" name="name" className="input-phone-number" placeholder="Phone Number" />
                </div>
            </div>
            <div className="sign-up-fields">
                    <img src="resources/img/address-icon.png" className="sign-up-icons" />
                <div className="input-div">
                    <input type="text" name="name" className="input-address" placeholder="Delivery Address" />
                </div>
            </div>
            <div>
                    <img src="resources/img/dob-icon.png" className="select-icons" />
                <div className="input-div">
                <select name="birthday-year" className="select-year select-birthday">
                    <option selected disabled>Year</option>
                    <option value="2000">2000</option>
                </select>
                <select name="birthday-day" className="select-day select-birthday">
                    <option selected disabled>Day</option>
                    <option value="01">01</option>
                    </select>
                <select name="birthday-month" className="select-month select-birthday custom-select">
                    <option selected disabled>Month</option>
                    <option value="January">January</option>
                </select>
                </div>
            </div>
                <div>
                    <img src="resources/img/insta-icon.png" className="select-icons" />
                <div className="input-div">
                    <input type="text" name="name" className="input-instagram" placeholder="Instagram Username" />
                </div>
            </div>
            <div className="sign-up-reason">
                    <img src="resources/img/question-icon.png" className="select-icons" />
                <div className="input-div">
                    <select name="reason" className="select-reason">
                        <option selected disabled>Reason for joining</option>
                        <option value="learn">Learn</option>
                        <option value="buy">Buy</option>
                        <option value="watch">Watch</option>
                    </select>
                </div>
            </div>
                <div>
                    <img src="resources/img/star-icon.png" className="select-icons" />
                <div className="input-div">
                    <input type="text" name="name" className="input-favorite-plant" placeholder="Favorite Houseplant" />
                </div>
            </div>
            <div className="sign-up-btn">
                <div className="sign-up-btn-text">
                    <p className="sign-up-submit">Submit</p>
                </div>
            </div>
        </div>
        </div>
    );
  }
}