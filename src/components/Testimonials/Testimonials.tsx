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
    <div className="p-8 md:p-20 bg-white dark:bg-slate-900 text-white">
      <h2 className="text-base text-center text-sky-500 dark:text-sky-400 font-semibold tracking-wide uppercase mb-2">
        Testimonios
      </h2>
      <h2 className="text-4xl font-bold mb-10 text-center text-slate-900 dark:text-white">
        Lo que otros dicen
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center sm:gap-4 md:gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-lg shadow-lg flex flex-col justify-between p-8 relative flex bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5 mb-8 md:mb-0"
          >
            <div className="flex flex-col md:flex-row items-center items-center">
              <div className="mr-0 mb-4 md:mr-4 md:mb-0">
                <Image
                  src={testimonial.photo}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-base text-slate-900 font-semibold dark:text-slate-300">
                  {testimonial.name}
                </p>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  {testimonial.jobTitle}
                </p>
              </div>
            </div>
            <div>
              <p className="mt-3 text-slate-700 dark:text-slate-300 text-center md:text-left">
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
