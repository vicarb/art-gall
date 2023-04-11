import React, { useState } from 'react';

const artworks = [
  { name: 'The Creation of Adam', image: '/creation.jpg' },
  { name: 'Starry Night', image: '/starry_night.jpg' },
  { name: 'Mona Lisa', image: '/mona_lisa.jpg' },
  { name: 'The Persistence of Memory', image: '/persistence_of_memory.jpg' },
  { name: 'The Scream', image: '/the_scream.jpg' },
  { name: 'The Great Wave off Kanagawa', image: '/great_wave.jpg' },
  { name: 'The Last Supper', image: '/last_supper.jpg' },
  { name: 'Girl with a Pearl Earring', image: '/girl_with_pearl_earring.jpg' }
];

type Artwork = {
  name: string;
  image: string;
  description?: string;
};

export const Landing = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const handleArtworkClick = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
  };

  const handleCloseModal = () => {
    setSelectedArtwork(null);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-sky mb-8">Welcome to our Art Collection</h1>
      <div className="w-full md:w-3/4 lg:w-1/2">
        <img
          src={artworks[0].image}
          alt={artworks[0].name}
          className="w-full h-auto mb-8 cursor-pointer"
          onClick={() => handleArtworkClick(artworks[0])}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {artworks.slice(1, 9).map((artwork: Artwork) => (
          <div key={artwork.name} className="m-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="bg-white rounded-md shadow-md">
              <img
                src={artwork.image}
                alt={artwork.name}
                className="w-full h-auto rounded-t-md cursor-pointer"
                onClick={() => handleArtworkClick(artwork)}
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-2">{artwork.name}</h2>
                <p className="text-gray-600">{artwork.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedArtwork && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white rounded-md shadow-lg p-4">
            <button className="absolute top-4 right-4 text-gray-600" onClick={handleCloseModal}>
              X
            </button>
            <img src={selectedArtwork.image} alt={selectedArtwork.name} className="w-full h-auto" />
          </div>
        </div>
      )}
    </div>
  );
};
