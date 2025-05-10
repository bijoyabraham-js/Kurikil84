import React from "react";
import "./EventList.css";

const events = [
  {
    title: "Kurikil Live Concert",
    venue: "Lulu Mall, Kochi",
    time: "2025-05-20 7:00 PM",
  },
  {
    title: "Fusion Jam",
    venue: "Marine Drive Amphitheatre",
    time: "2025-06-01 6:30 PM",
  },
  {
    title: "Rock Night",
    venue: "Bolgatty Palace",
    time: "2025-06-10 8:00 PM",
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
