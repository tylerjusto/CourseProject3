import React from 'react';
import imagetanningbed from './Images/TanningBed.png';
import imagetanninggirl from './Images/TanningGirl.png';
import imagespraytanning from './Images/TanningSpray.png';

function HoursOfOperation(){
    return (
        <div>
            <p>Open</p>
            <p> Monday-Friday: 9am - 7pm</p>
            <p>Saturday: 11am - 4pm</p>
            <p>Sunday: 1pm - 6pm</p>
        </div>
    )
}

function WelcomeIntro(){
    return(
        <div>
            <p>Beds + Bulbs = Results</p>
            <p>Simplicity. No Fees. No Contracts.</p>
        </div>
    )
}

function MembershipCosts(){
    return (
        <div>
            <p>Unlimited Prices</p>
            <p>Month Unlimited = 31 days</p>
            <p>Level & Two $30.99</p>
            <p>All Levels $49.99</p>
        </div>
    )
}

export default function Home(){
    return (
        <div>
            <HoursOfOperation/>
            <WelcomeIntro/>
            <MembershipCosts/>
            <img src={imagetanningbed} alt="Tanning Bed"/>
            <img src={imagetanninggirl} alt="Tanning Member"/>
            <img src={imagespraytanning} alt="Tanning Spray"/>
        </div>
    );
}
