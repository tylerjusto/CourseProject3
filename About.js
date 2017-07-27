import React from 'react';
import ImageStaff1 from './Images/TanningTeamMember.png';
import ImageStaff2 from './Images/TanningTeamMemberTwo.png';
import ImageStaff3 from './Images/TanningTeamMemberThree.png';

function HistoryText(){
    return (
        <div>
            <p>Owners of Tanning Oasis - Adam & Julie Lewis</p>
            <p>Adam purchased 50% of Tanning Oasis in 2003 with long time friend Joel Hastings. They opened a second salon in 2006 in Birmingham. In 2009, Adam and Joel moved on from their business relationship by Adam purchasing the Tuscaloosa salon and selling Joel the Birmingham salon. Adam will be forever grateful to Joel for the opportunity  in 2003.</p>
        </div>
    )
}

function StaffBios(){
    return (
        <div>
            <StaffCard name="Emma Holsombeck" title="Manager" image={ImageStaff1} />
            <StaffCard name="Megan Fuller" title="Employee" image={ImageStaff2} />
            <StaffCard name="Kayla Hallman" title="Employee" image={ImageStaff3} />
        </div>
    )
}

function StaffCard(props){
    return (
        <figure className="staff-card">
            <img className="staff-image" src={props.image} alt={props.name}/>
            <figcaption><strong>{props.name}</strong> {props.title}</figcaption>
        </figure>
    )
}

export default function About(){
    return (
        <div>
            <HistoryText/>
            <StaffBios/>
        </div>
    );
}
