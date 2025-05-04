import React from 'react';
import './Songs.css';
// import song1 from '../assets/song1.mp3';
// import song2 from '../assets/song2.mp3';
// import song3 from '../assets/song3.mp3';

const songs = [
  {
    title: 'Midnight Chill',
    artist: 'DJ LoFi',

  },
  {
    title: 'Echoes of Vinyl',
    artist: 'The Classics',
    
  },
  {
    title: 'Strum & Beat',
    artist: 'Retro Vibes',
    
  },
];

function Songs() {
  return (
    <section className="songs-section">
      <h2>Listen to Our Tracks</h2>
      <div className="songs-container">
        {songs.map((song, index) => (
          <div key={index} className="song-card">
            <h4>{song.title}</h4>
            <p>{song.artist}</p>
            <audio controls>
              <source src={song.src} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Songs;
