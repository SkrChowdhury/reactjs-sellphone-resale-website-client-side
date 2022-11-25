import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      {/* <!-- component --> */}
      <main className="h-fit w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <div>
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_avwze6mc.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        <button className="m-5">
          <Link className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
              <Link to="/">Go Home</Link>
            </span>
          </Link>
        </button>
      </main>
    </div>
  );
};

export default ErrorPage;
