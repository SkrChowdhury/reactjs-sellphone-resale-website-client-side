import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch(
        'https://reactjs-sellphone-server-side.vercel.app/users'
      );
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(
      `https://reactjs-sellphone-server-side.vercel.app/users/admin/${id}`,
      {
        method: 'PUT',
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success('Admin Created Successfully');
          refetch();
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl my-5">All Users</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Buyer | Seller</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="font-bold w-1">{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{user?.brand}</div>
                      <div className="font-bold">{user?.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user?.email}</td>
                <td>
                  <div className="flex gap-4">
                    <p>{user.role || 'buyers'}</p>
                  </div>
                </td>
                <th>
                  {user.role !== 'admin' && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-xs bg-sky-600 text-white hover:bg-sky-900 mr-4"
                    >
                      Make Admin
                    </button>
                  )}
                  <button className="btn btn-xs bg-red-600 text-white hover:bg-red-900 ">
                    Delete
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

export default AllUsers;
