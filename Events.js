import React from 'react';

const eventsData = [
    {
        time: 'August 7th, 2017 From 1PM - 5PM',
        title: 'Get On Board Day',
        description: 'We interacted with over 1,000 people and handed out as many free tanning visits as well.'
    },
    {
        time: 'September 1st, 2017 From 3PM - 9PM',
        title: 'Bodybuilding Spray Tans at Tanning Oasis!',
        description: 'Bodybuilding Spray Tans Tanning Oasis now offers Competition Black Out Spray Tans for bodybuilding shows! We will be spraying for the Clash at the Capstone.'
    },
    {
        time: 'September 7th, 2017 ALL DAY',
        title: 'Tanning Oasis Remodel',
        description: 'Remodel - Pt. 2 New Room & New Bath'
    }
];

function EventCard(props){
    return (
        <div className="event-card">
            <h2>{props.title}</h2>
            <div><strong>When:</strong> {props.time}</div>
            <p>{props.description}</p>
        </div>
    );
}


export default function Events(){

    let eventsDisplay = eventsData.map((event) => <EventCard time={event.time}
                                                             title={event.title}
                                                             description={event.description}/> );

return (
    <div>{eventsDisplay}</div>
    );
}
