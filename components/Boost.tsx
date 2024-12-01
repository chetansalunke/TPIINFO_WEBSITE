import React from 'react';

export default function Boost() {
  const data = [
    {
      img: 'Group41.png',
      title: 'Scheduling',
      text:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      img: 'Group42.png',
      title: 'Increase Conversion',
      text:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      img: 'Group43.png',
      title: 'Increase Analytics',
      text:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  return (
    <div className="flex flex-col py-10 items-center bg-gray-50">
      {/* Header Section */}
      <div className="text-center max-w-3xl mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Want to Boost Your Business?
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Discover tailored solutions to elevate your business and achieve your goals.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid gap-6 md:gap-10 items-center md:grid-cols-2 lg:grid-cols-3 px-5">
        {data.map((n, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 max-w-sm p-6"
          >
            {/* Image */}
            <img
              src={n.img}
              alt={n.title}
              className="w-28 h-28 mb-4"
              style={{ objectFit: 'contain' }}
            />

            {/* Content */}
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {n.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4">{n.text}</p>

            {/* Read More */}
            <button className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
              Read More
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                className="ml-2 mt-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L8 0.226497V11.7735L18 6ZM0 7H9V5H0V7Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
