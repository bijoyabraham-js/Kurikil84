import React from "react";

const events = [
  { id: 1, date: "2025-06-01", venue: "Madison Square Garden", band: "The Echoes" },
  { id: 2, date: "2025-06-05", venue: "Red Rocks", band: "Thunder Road" },
  { id: 3, date: "2025-06-10", venue: "The Forum", band: "Crystal Skies" },
  { id: 4, date: "2025-06-15", venue: "Wembley Stadium", band: "Neon Waves" },
  { id: 5, date: "2025-06-20", venue: "Sydney Opera House", band: "Midnight Run" },
  { id: 6, date: "2025-06-25", venue: "Hollywood Bowl", band: "Velvet Sound" },
  { id: 7, date: "2025-06-30", venue: "O2 Arena", band: "Shadow Beats" },
  { id: 8, date: "2025-07-05", venue: "Tokyo Dome", band: "Electric Pulse" },
  { id: 9, date: "2025-07-10", venue: "Staples Center", band: "Sonic Drive" },
];

export default function EventCarousel() {
  return (
    <div style={{ padding: "2rem clamp(1rem, 5vw, 3rem)", maxWidth: "1300px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", textAlign: "center" }}>
        Upcoming Events
      </h2>

      <div
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          gap: "1rem",
          paddingBottom: "1rem",
        }}
      >
        {events.map((event) => (
          <div
            key={event.id}
            style={{
              flex: "0 0 20%", // 5 per view
              minWidth: "200px",
              background: "#fff",
              borderRadius: "12px",
              padding: "1rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              scrollSnapAlign: "start",
              transition: "transform 0.2s, box-shadow 0.2s, border 0.2s",
              cursor: "pointer",
              border: "2px solid transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
              e.currentTarget.style.border = "2px solid #5d5969";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
              e.currentTarget.style.border = "2px solid transparent";
            }}
          >
            <p style={{ fontWeight: "bold", fontSize: "1.1rem", color: "#16423C" }}>
              {event.band}
            </p>
            <p style={{ color: "#333", margin: "0.3rem 0" }}>{event.date}</p>
            <p style={{ color: "#777", fontStyle: "italic" }}>{event.venue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
