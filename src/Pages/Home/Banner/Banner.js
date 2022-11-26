import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="container px-6 mx-auto my-4 ">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">
          SellPhone
        </h1>

        <p className="max-w-lg mx-auto mt-4 text-gray-500">
          The best solution for selling and buying phones in your area.
        </p>
      </div>
      <div className=" lg:flex">
        <div className="w-full lg:w-1/2 ">
          <div className="container px-6 py-2 mx-auto">
            <div className="grid grid-cols-1">
              <div>
                <img
                  className="relative z-10 object-cover w-full rounded-md h-96"
                  src="https://static.vecteezy.com/system/resources/previews/004/299/836/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
                  alt=""
                />

                <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                  <Link
                    to="/"
                    className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                  >
                    The Ultimate Phone Solution is here!
                  </Link>

                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    Here you can sell your old phones and buy another. you can
                    get the best deal besides exchange your phones with others.
                  </p>

                  <p className="mt-3 text-sm text-blue-500">26 Novemver 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center lg:w-1/2  ">
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_p9cnyffr.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};

export default Banner;
