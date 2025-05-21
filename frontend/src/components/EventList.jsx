import React from "react";
import "./EventList.css";

const events = [
  
  {
    title: "Canvas of Hope",
    venue: "Avenue Center Mananthala",
    time: "2025-05-24 5:30 PM",
  },

];

function EventList() {
  return (
    <div className="event-list-section">
      <h2 className="event-heading">Upcoming Events</h2>
      <div className="event-list">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <h3>{event.title}</h3>
            <p><strong>Venue:</strong> {event.venue}</p>
            <p><strong>Time:</strong> {event.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventList;
