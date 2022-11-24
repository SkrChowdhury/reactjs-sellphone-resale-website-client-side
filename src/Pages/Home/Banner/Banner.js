import React from 'react';

const Banner = () => {
  return (
    <div class="container px-6 mx-auto my-4 ">
      <div class="text-center">
        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">
          From the blog
        </h1>

        <p class="max-w-lg mx-auto mt-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          veritatis sint autem nesciunt, laudantium quia tempore delect
        </p>
      </div>
      <div class=" lg:flex">
        <div class="w-full lg:w-1/2 ">
          <div class="container px-6 py-2 mx-auto">
            <div class="grid grid-cols-1">
              <div>
                <img
                  class="relative z-10 object-cover w-full rounded-md h-96"
                  src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                  <a
                    href="#"
                    class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                  >
                    How to use sticky note for problem solving
                  </a>

                  <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure veritatis sint autem nesciunt, laudantium quia tempore
                    delect
                  </p>

                  <p class="mt-3 text-sm text-blue-500">20 October 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center lg:w-1/2  ">
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
