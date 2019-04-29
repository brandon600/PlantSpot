import React, { Component } from 'react';
import Instafeed from 'react-instafeed';
const accessToken = '8438647579.1677ed0.1f9054360f654ea6ae8a1f544a33d89a'
const BookId = '8438647579'



export default class InstafeedTarget extends Component {
    render() {
        const instafeedTar = 'instafeed';
        return (
        <div className="insta-section row">
            <div id={instafeedTar}>
                <Instafeed
                limit='5'
                ref='instafeed'
                resolution='standard_resolution'
                sortBy='most-recent'
                target={instafeedTar}
                template ='<div class="col span-1-of-5">
                    <a href={{link}} target="_blank" class="instafeed_item">
                        <img class="instafeed-img if-img" src="{{image}}" />
                            <div class="instafeed__item__overlay">
                            <div class="instafeed__item__overlay--inner">
                            <p class="instafeed__item__location">{{location}}</p>
                          </div>
                        </div>
                </div>'      
                userId={BookId}
                clientId='clientIdInstagramApiString'
                accessToken={accessToken}
                />
            </div>
        </div>
        )
    }
}