import React, { useState } from 'react';
import './Songs.css';

const songs = [
  { title: 'Midnight Chill', artist: 'DJ LoFi', src: '/path/to/song1.mp3' },
  { title: 'Echoes of Vinyl', artist: 'The Classics', src: '/path/to/song2.mp3' },
  { title: 'Strum & Beat', artist: 'Retro Vibes', src: '/path/to/song3.mp3' },
  { title: 'Vibes of the Night', artist: 'Urban Beats', src: '/path/to/song4.mp3' },
  { title: 'Chillwave', artist: 'Wave Sound', src: '/path/to/song5.mp3' },
  { title: 'Electric Dreams', artist: 'Synth Masters', src: '/path/to/song6.mp3' },
  { title: 'Summer Breeze', artist: 'Beach Grooves', src: '/path/to/song7.mp3' },
  { title: 'Into the Echo', artist: 'Neon Lights', src: '/path/to/song8.mp3' },
  { title: 'Groove Street', artist: 'Funky Beats', src: '/path/to/song9.mp3' },
  { title: 'Nocturnal Rhythm', artist: 'Night Beats', src: '/path/to/song10.mp3' },
  { title: 'Cloud Nine', artist: 'Daydreamers', src: '/path/to/song11.mp3' },
  { title: 'Bassline Funk', artist: 'Deep Vibes', src: '/path/to/song12.mp3' },
  { title: 'Rhythm Quest', artist: 'Groove Theory', src: '/path/to/song13.mp3' },
  { title: 'Echo Chamber', artist: 'Space Echoes', src: '/path/to/song14.mp3' },
  { title: 'Pulse of Sound', artist: 'Beat Collective', src: '/path/to/song15.mp3' },
  { title: 'Flow State', artist: 'Chill Beats', src: '/path/to/song16.mp3' },
  { title: 'City Lights', artist: 'Urban Waves', src: '/path/to/song17.mp3' },
  { title: 'Nightfall Dreams', artist: 'Lofi Soundscapes', src: '/path/to/song18.mp3' },
];

const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

function Songs() {
  const chunks = chunkArray(songs, 5);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    if (index >= 0 && index < chunks.length) setCurrentSlide(index);
  };

  return (
    <section className="spotify-section">
      <h2 style={{color:'red'}}>Listen to Our Tracks</h2>
      <div className="carousel-wrapper">
        <button
          className="nav-button"
          onClick={() => goToSlide(currentSlide - 1)}
          disabled={currentSlide === 0}
        >
          ‹
        </button>

        <div className="carousel-slide">
          {chunks[currentSlide].map((song, i) => (
            <div key={i} className="spotify-card">
              <div className="song-info">
                <h4>{song.title}</h4>
                <p>{song.artist}</p>
                <audio controls>
                  <source src={song.src} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          ))}
        </div>

        <button
          className="nav-button"
          onClick={() => goToSlide(currentSlide + 1)}
          disabled={currentSlide === chunks.length - 1}
        >
          ›
        </button>
      </div>

      <div className="dots">
        {chunks.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Songs;
