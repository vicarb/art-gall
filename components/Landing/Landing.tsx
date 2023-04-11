import React from 'react'
import Image from 'next/image';

const artworks = [
  { name: 'The Creation of Adam', image: '/public/creation.jpg' },
  { name: 'Starry Night', image: 'path/to/starry_night.jpg' },
  { name: 'Mona Lisa', image: 'path/to/mona_lisa.jpg' },
  { name: 'The Persistence of Memory', image: 'path/to/persistence_of_memory.jpg' },
  { name: 'The Scream', image: 'path/to/the_scream.jpg' },
  { name: 'The Great Wave off Kanagawa', image: 'path/to/great_wave.jpg' },
  { name: 'The Last Supper', image: 'path/to/last_supper.jpg' },
  { name: 'Girl with a Pearl Earring', image: 'path/to/girl_with_pearl_earring.jpg' }
];

type Artwork = {
    name: string;
    image: string;
    description?: string;
  };
  export const Landing = () => {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-sky mb-8">Welcome to our Art Collection</h1>
        <div className="w-full md:w-3/4 lg:w-1/2">
          <Image src={artworks[0].image} alt={artworks[0].name} width={1200} height={800} layout="responsive" className="w-full h-auto mb-8" />
        </div>
        <div className="flex flex-wrap justify-center">
          {artworks.slice(1, 9).map((artwork: Artwork) => (
            <div key={artwork.name} className="m-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
              <div className="bg-white rounded-md shadow-md">
                <Image src={artwork.image} alt={artwork.name} width={500} height={500} layout="responsive" className="w-full h-auto rounded-t-md" />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800 mb-2">{artwork.name}</h2>
                  <p className="text-gray-600">{artwork.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };