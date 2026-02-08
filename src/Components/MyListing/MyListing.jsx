import React from "react";
import { useLoaderData } from "react-router";
import MyContainer from "../MyContainer/MyContainer";
import { FiEdit } from "react-icons/fi";
import { FaMagnifyingGlass, FaTrashCan } from "react-icons/fa6";


const MyListing = () => {
const users = useLoaderData();
    console.log(users);
     
    const handleUserDelete = id =>{
     console.log(id)
    }
 

  return (
    <MyContainer>
      <div>
        <h1>this is my MyListing :{users.length}</h1>
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
              {users.map((user, index) => (
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
                      onClick={()=>handleUserDelete(user._id)}
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
