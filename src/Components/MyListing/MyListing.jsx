import React, { useState } from "react";
import { useLoaderData } from "react-router";
import MyContainer from "../MyContainer/MyContainer";
import { FiEdit } from "react-icons/fi";
import { FaMagnifyingGlass, FaTrashCan } from "react-icons/fa6";
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
        fetch(`http://localhost:3000/users/${id}`, {
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

  return (
    <MyContainer>
      <div>
        <h1>this is my MyListing :{myListing.length}</h1>
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
            <thead>
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
              {myListing.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.carName}</td>
                  <td>{user.category}</td>
                  <td>{user.carRent}</td>
                  <td>{user.status}</td>
                  <td>
                    <button className="btn btn-square  hover:bg-primary">
                      <FiEdit />
                    </button>
                    <button className="btn btn-square  hover:bg-primary mx-2">
                      <FaMagnifyingGlass />
                    </button>
                    <button
                      onClick={() => handleUserDelete(user._id)}
                      className="btn btn-square  hover:bg-primary"
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
