import React from 'react'

const artworks = [
  { name: 'The Creation of Adam', image: '/creation.jpg' },
  { name: 'Starry Night', image: 'path/to/starry_night.jpg' },
  { name: 'Mona Lisa', image: 'path/to/mona_lisa.jpg' },
  { name: 'The Persistence of Memory', image: 'path/to/persistence_of_memory.jpg' },
  { name: 'The Scream', image: 'path/to/the_scream.jpg' },
  { name: 'The Great Wave off Kanagawa', image: 'path/to/great_wave.jpg' },
  { name: 'The Last Supper', image: 'path/to/last_supper.jpg' },
  { name: 'Girl with a Pearl Earring', image: 'path/to/girl_with_pearl_earring.jpg' }
];

export const Landing = () => {
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '50%' }}>
            <img src={artworks[0].image} alt={artworks[0].name} style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
            <div style={{ padding: '10px' }}>
              <p style={{ fontSize: '16px', fontWeight: 'bold', margin: '0' }}>{artworks[0].name}</p>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {artworks.slice(1, 9).map((artwork, index) => (
            <div key={artwork.name} style={{ margin: '10px', width: '200px', height: '300px', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '5px' }}>
              <img src={index === 0 ? artwork.image : artwork.thumbnail} alt={artwork.name} style={{ width: '100%', height: 'auto', borderRadius: '5px 5px 0 0' }} />
              <div style={{ padding: '10px' }}>
                <p style={{ fontSize: '16px', fontWeight: 'bold', margin: '0' }}>{artwork.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  