import React from 'react';

const Phone = ({ phone }) => {
  console.log(phone);
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full mx-auto">
        <img
          className="w-auto h-56 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
          src={phone.image}
          alt=""
        />

        <div className="w-96 -mt-5 overflow-hidden bg-white rounded-lg shadow-lg md:w-96 dark:bg-gray-800">
          <h3 className="py-3 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            {phone.phone_name}
          </h3>
          <div>
            <div className="grid grid-cols-2">
              <p className="py-1 px-3 font-semibold tracking-wide text-start text-gray-800  dark:text-white">
                Original Price: {phone.original_price}
              </p>
              <p className="py-1 px-3 font-semibold tracking-wide text-start text-gray-800  dark:text-white">
                Resale Price: {phone.resale_price}
              </p>
            </div>

            <div className="grid grid-cols-2">
              <p className="py-1 px-3 font-semibold tracking-wide text-start text-gray-800  dark:text-white">
                Seller: {phone.seller}
              </p>
              <p className="py-1 px-3 font-semibold tracking-wide text-start text-gray-800  dark:text-white">
                Location: {phone.location}
              </p>
            </div>
            <p className="py-1 px-3 font-semibold tracking-wide text-start text-gray-800  dark:text-white">
              Year of use: {phone.year_of_use}
            </p>
            <p className="py-1 px-3 font-semibold tracking-wide text-start text-gray-800  dark:text-white">
              Posted On: {phone.posted_on}
            </p>
          </div>

          <div className="flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <label
              htmlFor="phone-modal"
              className="px-3 py-2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
            >
              Buy Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
