import React from 'react';
import Image from 'next/image';
import featuredImg from '/public/featured-image.png';

const Featured = () => {
  return (
    <div className="bg-gray-100 md:px-16 p-8">
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase mb-5">
        Aplicaciones destacadas
      </h2>
      <div className="container mx-auto px-4 py-12 md:flex md:items-center ">
        <div className="md:w-1/2">
          <Image src={featuredImg} alt="Featured App" className="mx-auto md:w-3/4 lg:w-3/5" />
        </div>
        <div className="mt-8 md:mt-0 md:ml-8 md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Featured App Title</h2>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in rutrum purus. Sed non enim tincidunt, varius orci non, fringilla lorem.</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Download now</button>
        </div>
      </div>
      <div className="py-8">
        <h3 className="text-2xl font-bold mb-4">Otras aplicaciones</h3>
        <div className="flex flex-wrap -mx-4">
          <div className="px-4 mb-4 w-full md:w-1/3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src={featuredImg} alt="Other App 1" className="h-48 w-full object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-bold mb-2">Other App 1 Title</h4>
              </div>
            </div>
          </div>
          <div className="px-4 mb-4 w-full md:w-1/3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src={featuredImg} alt="Other App 2" className="h-48 w-full object-cover" width={400} height={100}/>
              <div className="p-4">
                <h4 className="text-lg font-bold mb-2">Other App 2 Title</h4>
              </div>
            </div>
          </div>
          <div className="px-4 mb-4 w-full md:w-1/3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src={featuredImg} alt="Other App 3" className="h-48 w-full object-cover" width={400} height={100}/>
              <div className="p-4">
                <h4 className="text-lg font-bold mb-2">Other App 3 Title</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
