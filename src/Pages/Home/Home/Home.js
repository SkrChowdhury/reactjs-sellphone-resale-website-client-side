import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import PhoneCategories from '../PhoneCategories/PhoneCategories';
import TryOurApp from '../TryOurApp/TryOurApp';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AdvertisedItems></AdvertisedItems>
      <PhoneCategories></PhoneCategories>
      <TryOurApp></TryOurApp>
    </div>
  );
};

export default Home;
