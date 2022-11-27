import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
const PhoneModal = ({ phoneInfo }) => {
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const itemName = form.itemName.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const image = form.image.src;
    const orders = {
      name,
      email,
      brand: itemName,
      resale_price: price,
      phone,
      location,
      image,
      phoneBrand: phoneInfo.brand,
      phoneSeller: phoneInfo.seller,
      originalPrice: phoneInfo.original_price,
      used: phoneInfo.year_of_use,
    };

    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success('Order Confirmed');
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="phone-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="phone-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <img
              // type="image"
              alt=""
              name="image"
              // defaultValue={phoneInfo.image}
              src={phoneInfo.image}
              disabled
              className=" w-28 h-28 mx-auto "
            />
            <p className="text-center uppercase font-bold text-xl">
              {phoneInfo?.brand}
            </p>
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="User Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              type="text"
              name="itemName"
              defaultValue={phoneInfo?.phone_name}
              disabled
              placeholder="Item Name"
              className="input w-full input-bordered "
            />

            <input
              name="price"
              defaultValue={phoneInfo?.resale_price}
              type="text"
              disabled
              placeholder="Price"
              className="input w-full input-bordered "
            />

            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Meeting Location"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn bg-black w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PhoneModal;
