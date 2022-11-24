import React from 'react';

const PhoneCategory = () => {
  return (
    <div>
      <div class="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 text-center">
        <img
          class="object-cover w-full h-56"
          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="avatar"
        />

        <div class="py-5 text-center">
          <a
            href="#"
            class="block text-2xl font-bold text-gray-800 dark:text-white"
            tabindex="0"
            role="link"
          >
            John Doe
          </a>
          <span class="text-sm text-gray-700 dark:text-gray-200">
            Software Engineer
          </span>
        </div>
        <button class="mb-4 self-center px-6 py-2 font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          Primary
        </button>
      </div>
    </div>
  );
};

export default PhoneCategory;
