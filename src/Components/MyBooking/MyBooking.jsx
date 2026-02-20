import React from 'react';
import { FaTrashCan } from 'react-icons/fa6';
import { FiEdit } from 'react-icons/fi';
import { useLoaderData } from 'react-router';

const MyBooking = () => {
  const bookings = useLoaderData();
  console.log(bookings)


  return (
    <div>
      <h1>this is my booking </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Car Name</th>
              <th>Provider Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking._id}>
                <th>{index + 1}</th>
                <td>{booking.carName}</td>
                <td>{booking.providerName}</td>
                <td>{booking.status}</td>
                <td>
                  <button className="mr-3 btn btn-square bg-purple-300 hover:bg-primary">
                    <FiEdit />
                  </button>
                  <button className="btn btn-square bg-purple-300 hover:bg-primary">
                    <FaTrashCan />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;