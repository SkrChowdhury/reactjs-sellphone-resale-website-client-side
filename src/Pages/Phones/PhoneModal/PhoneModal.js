import React from 'react';

const PhoneModal = () => {
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
            // onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="name"
              type="text"
              // defaultValue={user?.displayName}
              disabled
              placeholder="User Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              // defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              type="text"
              disabled
              placeholder="Item Name"
              className="input w-full input-bordered "
            />
            <input
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
