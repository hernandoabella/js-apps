import React from 'react';

const Featured = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src="/path/to/image.jpg" alt="Featured" />
      <h2 className="text-3xl font-bold my-4">Featured Title</h2>
      <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">Call to Action</button>
    </div>
  );
};

export default Featured;