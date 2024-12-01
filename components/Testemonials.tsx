import React from 'react';

export default function Testimonials() {
  return (
    <div className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="text-center mb-14">
        <h3 className="text-2xl font-medium text-indigo-600 tracking-widest uppercase">
          Testimonials
        </h3>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mt-4">
          What Our Clients Say
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto px-6">
        {[
          {
            name: 'Alice Johnson',
            role: 'CTO, Innovatech',
            image:
              'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&q=75&fit=crop&w=112',
            feedback:
              '"TechSphere transformed the way we operate with their cutting-edge solutions. Their professionalism and support are unparalleled!"',
          },
          {
            name: 'Mark Douglas',
            role: 'Product Manager, NexSoft',
            image:
            'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&q=75&fit=crop&w=112',
            feedback:
              '"Their team delivered outstanding results on time and exceeded our expectations. The tech expertise they brought was exceptional!"',
          },
          {
            name: 'Sophia Lee',
            role: 'CEO, QuantumTech',
            image:
              'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&q=75&fit=crop&w=112',
            feedback:
              '"Partnering with TechSphere was the best decision for our business. Their innovative solutions gave us a competitive edge!"',
          },
        ].map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full overflow-hidden shadow-md">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-bold text-indigo-600">
                {testimonial.name}
              </h2>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              {testimonial.feedback}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
