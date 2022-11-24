import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import PhoneCategories from '../PhoneCategories/PhoneCategories';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AdvertisedItems></AdvertisedItems>
      <PhoneCategories></PhoneCategories>
    </div>
  );
};

export default Home;
