import React, { useState } from "react";
import { useLoaderData } from "react-router";
import MyContainer from "../MyContainer/MyContainer";
import { FiEdit } from "react-icons/fi";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";

const MyListing = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);

  const [myListing, setMyListing] = useState(loaderData);
  

  const handleUserDelete = (id) => {
    console.log(id);

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
        fetch(`http://localhost:3000/addedCars/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              const remaining = myListing.filter((user) => user._id !== id);
              setMyListing(remaining);
            }
            Swal.fire({
              title: "Deleted!",
              text: "Your car has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };

  const handleCarUpdate = (car, id) => {
    console.log("updated car by clicking", car);
  
  
    Swal.fire({
      title: "Update Car",
      input: "select",
      inputOptions: { Available: "Available", Booked: "Booked" },
      inputValue: car.status,

      // inputCarName: "Enter new Car name",
      // inputProviderName: "Enter new Provider name",

      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/addedCars/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ rentPrice: result.value }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              const updated = myListing.map((item) =>
                item._id === id
                  ? {
                      ...item,
                      status: result.value,
                    }
                  : item,
              );
              setMyListing(updated);
            }
          });
        Swal.fire("Saved!", "update", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <MyContainer>
      <div>
        <h1 className="m-5 text-xl font-bold underline text-center text-gray-500">
          Total Car List : {myListing.length}
        </h1>
        <div>
          {/* {users.map((user) => (
            <p key={user._id}>
              {user.providerName} :{user.created_by}
            </p>
          ))} */}
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead className="text-bold text-lg">
              <tr>
                <th></th>
                <th>Car Name</th>
                <th>Category</th>
                <th>Car Rent Price £</th>
                <th>Car Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myListing.map((car, index) => (
                <tr key={car._id}>
                  <th>{index + 1}</th>
                  <td>{car.carName}</td>
                  <td>{car.category}</td>
                  <td>{car.rentPrice}</td>
                  <td className="">{car.status}</td>

                  <td>
                    <button
                      // disabled={!car.rentPrice}
                      onClick={() => handleCarUpdate(car,)}
                      className="btn btn-square bg-amber-300 hover:bg-primary mr-2"
                    >
                      <FiEdit />
                    </button>
                 

                    <button
                      onClick={() => handleUserDelete(car._id)}
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

export default MyListing;
