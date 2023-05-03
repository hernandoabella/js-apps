import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className="bg-white py-12 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Testimonios de nuestros clientes</h2>
      <div className="flex justify-center flex-wrap ">
        <div className="bg-white rounded-lg shadow-md mx-4 my-8 p-8 w-80">
          <p className="text-gray-600 text-lg leading-7 mb-6">Me encantó la aplicación. Me ayudó a ser más productivo y organizado en mi día a día.</p>
          <div className="flex items-center">
            <Image src="/customer1.jpg" alt="Customer 1" width={60} height={60} className="rounded-full mr-3" />
            <div>
              <p className="font-medium text-gray-800 text-lg mb-1">Juan Pérez</p>
              <p className="text-gray-500 text-sm">CEO en ABC Company</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md mx-4 my-8 p-8 w-80">
          <p className="text-gray-600 text-lg leading-7 mb-6"> La mejor aplicación que he utilizado. Me permite trabajar en cualquier lugar y momento, sin preocuparme por la seguridad de mis datos.</p>
          <div className="flex items-center">
            <Image src="/customer2.jpg" alt="Customer 2" width={60} height={60} className="rounded-full mr-3" />
            <div>
              <p className="font-medium text-gray-800 text-lg mb-1">María González</p>
              <p className="text-gray-500 text-sm">Diseñadora gráfica freelance</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md mx-4 my-8 p-8 w-80">
          <p className="text-gray-600 text-lg leading-7 mb-6">Esta aplicación ha cambiado mi vida. Me ayuda a mantenerme enfocado en mis tareas y proyectos, y me permite alcanzar mis metas con mayor facilidad.</p>
          <div className="flex items-center">
            <Image src="/customer3.webp" alt="Customer 3" width={60} height={60} className="rounded-full mr-3" />
            <div>
              <p className="font-medium text-gray-800 text-lg mb-1">Ana Ramírez</p>
              <p className="text-gray-500 text-sm">Profesora de yoga</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
