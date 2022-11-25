import React, { useEffect, useState } from 'react';
import PhoneCategory from './PhoneCategory';

const PhoneCategories = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/brands')
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-10 my-6">
        {brands.map((brand) => (
          <PhoneCategory key={brand._id} brand={brand}></PhoneCategory>
        ))}
      </div>
    </div>
  );
};

export default PhoneCategories;
