import React from 'react';
import PhoneCategory from './PhoneCategory';

const PhoneCategories = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">
          Phone Categories
        </h1>

        <p className="max-w-lg mx-auto mt-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          veritatis sint autem nesciunt, laudantium quia tempore delect
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 my-6">
        <PhoneCategory></PhoneCategory>
        <PhoneCategory></PhoneCategory>
        <PhoneCategory></PhoneCategory>
      </div>
    </div>
  );
};

export default PhoneCategories;
