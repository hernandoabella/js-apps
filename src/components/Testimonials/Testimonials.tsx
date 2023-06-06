import React from "react";
import Image from "next/image";
import testimonialsData from "../../../data/testimonials.json";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

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
    <div className="p-8 text-center dark:bg-slate-900 text-white">
      <h2 className="text-base text-sky-500 dark:text-sky-400 font-semibold tracking-wide uppercase mb-5">
        Testimonios
      </h2>
      <h2 className="text-4xl font-bold mb-8">
        Lo que otros dicen
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.id}
            className="bg-white rounded-lg shadow-md flex flex-col justify-between p-8 relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5"
          >
            <p className="text-gray-600 text-lg leading-7 mb-6">
              
              {testimonial.text}
              
            </p>
            <div className="flex items-center">
              <Image
                src={testimonial.photo}
                alt={testimonial.name}
                width={60}
                height={60}
                className="rounded-full mr-3"
              />
              <div>
                <p className="text-base text-slate-900 font-semibold dark:text-slate-300">
                  {testimonial.name}
                </p>
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