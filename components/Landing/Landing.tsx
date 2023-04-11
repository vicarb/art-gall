import React, { useState } from 'react';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';




type Artwork = {
  name: string;
  image: string;
  description?: string;
};
const artworks: Artwork[] = [
  { name: 'The Creation of Adam', image: '/creation.jpg' },
  { name: 'Starry Night', image: '/starry_night.jpg' },
  { name: 'Mona Lisa', image: '/mona_lisa.jpg' },
  { name: 'The Persistence of Memory', image: '/persistence_of_memory.jpg' },
  { name: 'The Scream', image: '/the_scream.jpg' },
  { name: 'The Great Wave off Kanagawa', image: '/great_wave.jpg' },
  { name: 'The Last Supper', image: '/last_supper.jpg' },
  { name: 'Girl with a Pearl Earring', image: '/girl_with_pearl_earring.jpg' }
];


const Landing = () => {
  const [showImage, setShowImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setShowImage(true);
  };

  const handleImageClose = () => {
    setShowImage(false);
    setSelectedImage('');
  };


  
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-sky mb-8">Welcome to our Art Collection</h1>
      <div className="w-full md:w-3/4 lg:w-1/2">
        <button onClick={() => handleImageClick(artworks[0].image)}>
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {artworks.slice(1, 9).map((artwork: Artwork) => (
          <div key={artwork.name} className="m-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="bg-white rounded-md shadow-md">
              <button onClick={() => handleImageClick("https://cdn.shopify.com/s/files/1/0336/2701/3259/articles/Michelangelo_the_creation_of_adam_meaning_f356496b-ef77-4759-bc81-f23e864cf2b4.jpg?v=1663084517")}>
                <Image src="https://cdn.shopify.com/s/files/1/0336/2701/3259/articles/Michelangelo_the_creation_of_adam_meaning_f356496b-ef77-4759-bc81-f23e864cf2b4.jpg?v=1663084517" alt={artwork.name} width={500} height={500} layout="responsive" className="w-full h-auto rounded-t-md" />
              </button>
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-2">{artwork.name}</h2>
                <p className="text-gray-600">{artwork.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showImage && (
        <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-80" onClick={handleImageClose}>
          <button onClick={handleImageClose} className="absolute top-5 right-5 text-white">
            <FaTimes size={32} />
          </button>
          <Image src={selectedImage} alt="Selected Artwork" layout="responsive" width={1200} height={800} />
        </div>
      )}
    </div>
  );
};

export default Landing;