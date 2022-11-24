import React from 'react';

const PhoneCategory = () => {
  return (
    <div>
      <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 text-center">
        <img
          className="object-cover w-full h-56"
          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="avatar"
        />

        <div className="py-5 text-center">
          <a
            href="#"
            className="block text-2xl font-bold text-gray-800 dark:text-white"
            tabIndex="0"
            role="link"
          >
            John Doe
          </a>
          <span className="text-sm text-gray-700 dark:text-gray-200">
            Software Engineer
          </span>
        </div>
        <button className=" mb-4 px-6 py-2 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
          View All
        </button>
      </div>
    </div>
  );
};

export default PhoneCategory;
