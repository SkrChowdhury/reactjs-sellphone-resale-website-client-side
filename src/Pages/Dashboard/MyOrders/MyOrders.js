import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/orders?email=${user?.email}`;

  const { data: orders = [] } = useQuery({
    queryKey: ['orders', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h3 className="text-3xl my-5">My Orders</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>No</th>
              <th>Image | Phone | Brand</th>
              <th>Seller | Location</th>
              <th>Resale | Original Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders?.map((order, index) => (
                <tr key={index}>
                  <td className="font-bold w-1">{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-20 rounded">
                          <img
                            src={order.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{order?.brand}</div>
                        <div className="text-sm opacity-50">
                          {order?.phoneBrand}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {order?.phoneSeller}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {order?.location}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-4">
                      <p>{order?.resale_price}</p>
                      <p className="line-through text-red-600">
                        {order?.originalPrice}
                      </p>
                    </div>
                  </td>
                  <th>
                    <button className="btn btn-xs bg-red-600 text-white hover:bg-red-900 mr-4">
                      Delete
                    </button>
                    <button className="btn btn-xs bg-sky-600 text-white hover:bg-sky-900 ">
                      Pay Now
                    </button>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
