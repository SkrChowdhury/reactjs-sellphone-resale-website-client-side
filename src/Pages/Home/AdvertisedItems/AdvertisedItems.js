import React from 'react';
import AdvertisedItem from './AdvertisedItem';

const AdvertisedItems = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">
          Advertised Phones
        </h1>

        <p className="max-w-lg mx-auto mt-4 text-gray-500">
          See our latest added phones near you. grab them as soon as possible.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-10 my-6">
        <AdvertisedItem></AdvertisedItem>
        <AdvertisedItem></AdvertisedItem>
        <AdvertisedItem></AdvertisedItem>
        <AdvertisedItem></AdvertisedItem>
      </div>
    </div>
  );
};

export default AdvertisedItems;
