import React, { useContext, useEffect, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { AuthContext } from "../../context/AuthContext";
import MyContainer from "../MyContainer/MyContainer";
import Swal from "sweetalert2";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  console.log("token", user.accessToken);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/bookings?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setBookings(data);
        });
    }
  }, [user?.email]);

  // useEffect(() => {
  //   if (user?.email) {
  //     fetch(`http://localhost:3000/bookings?email=${user.email}`, {
  //       headers: {
  //         Authorization: `Bearer ${user.accessToken}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("after fetching data from database", data);
  //         setBookings(data);
  //       });
  //   }
  // }, [user?.email, user.accessToken]);

  const handleDeleteBooking = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/bookings/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your booking has been deleted.",
                icon: "success",
              });

              // filtering id for delete
              const remainingBookings = bookings.filter(
                (booking) => booking._id !== _id,
              );
              setBookings(remainingBookings);
            }
          });
      }
    });
  };

  return (
    <MyContainer>
      <div>
        <h1 className="md:text-2xl text-purple-800 text-center md:font-bold underline shadow-2xl m-10">
          My bookings :{" "}
          <span className="text-purple-500">{bookings.length}</span>
        </h1>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead className="md:text-lg">
              <tr>
                <th></th>
                <th>Car Name</th>
                <th>Rent Name & email</th>
                <th>Car Image</th>
                {/* <th>Provider Name</th> */}
                <th>Rent Price (per day)</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(bookings) &&
                bookings.map((booking, index) => (
                  <tr key={booking._id}>
                    <th className="md:text-xl text-gray-600">{index + 1}</th>
                    <td>{booking.carName}</td>
                    <td>
                      {booking.rent_name}
                      <br></br>
                      {booking.rent_email}
                    </td>
                    <td>
                      <img
                        className="md:w-20 md:h-14 object-cover rounded"
                        src={booking.imageUrl}
                        alt={booking.carName}
                      />
                    </td>
                    {/* <td>{booking.providerName}</td> */}
                    <td>{booking.rentPrice}</td>
                    <td>
                      {booking.status === "pending" ? (
                        <div className="badge badge-warning">
                          {booking.status}
                        </div>
                      ) : (
                        <div className="badge badge-success">
                          {booking.status}
                        </div>
                      )}
                    </td>
                    <td>
                      <button className="md:mr-3 btn btn-square bg-purple-300 hover:bg-primary">
                        <FiEdit />
                      </button>
                      <button
                        onClick={() => handleDeleteBooking(booking._id)}
                        className="btn btn-square bg-purple-300 hover:bg-primary"
                      >
                        <FaTrashCan />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </MyContainer>
  );
};

export default MyBooking;
