'use client';

import React from 'react';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating?: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Working with Adekunle was an absolute game-changer for my project. He brought a fresh and innovative perspective to the table and demonstrated an unparalleled commitment to excellence. Adekunle's ability to transform ideas into visually stunning designs is remarkable. Thanks, Adekunle, for turning my vision into a visual masterpiece!",
    author: 'Oluwaseyi A.',
    role: 'Co-Founder/COO',
    rating: 5,
  },
  {
    quote:
      'He possesses a keen eye for detail and an intuitive understanding of the client\'s vision. His responsiveness and willingness to go the extra mile to ensure complete satisfaction impressed me the most. Communication with Adekunle was seamless. If you\'re looking for a creative designer who meets and exceeds expectations, Adekunle is the go-to professional. I wholeheartedly recommend him and look forward to future collaborations.',
    author: 'Oluwaseyi A.',
    role: 'Co-Founder/COO',
    rating: 5,
  },
  {
    quote:
      'Adekunle is a professional graphics and product designer who has delivered a number of projects for me excellently. His jobs perfectly blend quality and excellence.',
    author: 'David B.',
    role: 'I.P.I.C. Media',
    rating: 5,
  },
  {
    quote:
      'It is inspiring to work with someone that shares his passion for design and user experience. He would do everything he can to meet deadlines and the highest expectation from visual and user interface design. Ade, could listen to a concept and come up with a very intuitive and user-friendly design.',
    author: 'Amos Idonor',
    role: 'Co-Founder/CEO, AfriLing Technologies.',
    rating: 5,
  },
  {
    quote:
      'Ade is a designer that doesn\'t just focus on pretty pictures. He focuses on the user experience also and fully embraces the key principles of good user experience design. His designs have been and will continue to be enjoyed by hundreds and thousands of users.',
    author: 'Paul Anyiam',
    role: 'Co-Founder/CTO',
    rating: 5,
  },
];

const StarRating: React.FC<{ count: number }> = ({ count }) => {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} className="w-4 h-4 fill-gray-400 text-gray-400" />
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-24 bg-[#0059FF]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#02003733] bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-500 border-opacity-30 
                         transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                {/* <Quote className="w-8 h-8 text-blue-300 opacity-70" /> */}
                <Image src='/images/qt.png' alt='qt' width={100} height={100} className="w-12 h-8 text-blue-300 opacity-70"/>
                {testimonial.rating && <StarRating count={testimonial.rating} />}
              </div>

              <p className="text-sm text-blue-50 leading-relaxed mb-6">
                {testimonial.quote}
              </p>

              <div className='flex gap-1 items-center'>
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-blue-200">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}