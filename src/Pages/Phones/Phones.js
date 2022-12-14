import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Phone from './Phone';
import PhoneModal from './PhoneModal/PhoneModal';

const Phones = () => {
  const phones = useLoaderData();
  const [phoneInfo, setPhoneInfo] = useState('');

  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">
          BUY NOW
        </h1>

        <p className="max-w-lg mx-auto mt-4 text-gray-500">
          Buy Phones or Gadgets From SellPhone.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 my-6">
        {phones.map((phone) => (
          <Phone
            key={phone._id}
            phone={phone}
            setPhoneInfo={setPhoneInfo}
          ></Phone>
        ))}
      </div>
      <PhoneModal phoneInfo={phoneInfo}></PhoneModal>
    </div>
  );
};

export default Phones;
