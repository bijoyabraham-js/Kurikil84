
function SpotifyEmbed() {
  return (
    <div style={{ backgroundColor: 'black', padding: '3rem 0' }}>
     <h2 style={{color:'white',textAlign:'center',fontSize:'3rem'}}>Listen to Our Tracks</h2>
     <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem',backgroundColor:'black' }}>
    <iframe
      style={{ borderRadius: '12px', width: '100%',backgroundColor:'black' }}
      src="https://open.spotify.com/embed/artist/1kfF1kkbyruQ6Abd540tNL"
      height="380"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title="Spotify Artist"
    ></iframe>
  </div>
</div>

  );
}

export default SpotifyEmbed;
