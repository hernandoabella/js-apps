import React from 'react';
import Image from 'next/image';
import testimonialsData from '../../../data/testimonials.json';

type Testimonial = {
  id: number;
  text: string;
  name: string;
  jobTitle: string;
  photo: string;
};

const Testimonials = () => {
  const testimonials: Testimonial[] = testimonialsData;

  return (
    <div className="bg-white py-12 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Testimonios de nuestros clientes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className="bg-white rounded-lg shadow-md flex flex-col justify-between p-8">
            <p className="text-gray-600 text-lg leading-7 mb-6 flex-1">{testimonial.text}</p>
            <div className="flex items-center">
              <Image src={testimonial.photo} alt={testimonial.name} width={60} height={60} className="rounded-full mr-3" />
              <div>
                <p className="font-medium text-gray-800 text-lg mb-1">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.jobTitle}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
