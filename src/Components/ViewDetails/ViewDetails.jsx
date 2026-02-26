import React, { useContext, useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import MyContainer from "../MyContainer/MyContainer";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const ViewDetails = () => {
  const product = useLoaderData();
  const bookModalRef = useRef(null);
  const { user } = useContext(AuthContext);

  console.log("product from loader", product);
  if (!product) {
    return <p>Loading...</p>;
  }
  const {
    _id,
    carName,
    imageUrl,
    carType,
    description,
    providerName,
    created_by,
    location,
    status,
    rentPricePerDay,
    createdAt,
  } = product || {};

  const handleBookModalOpen = () => {
    bookModalRef.current.showModal();
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const rent_email = e.target.rent_email.value;
    const carName = e.target.carName.value;
    const imageUrl = e.target.imageUrl.value;
    const rentPrice = e.target.rentPrice.value;
    console.log({ product, name, rent_email, carName, imageUrl, rentPrice });
    const newBooking = {
      product: product,
      rent_name: name,
      rent_email: rent_email,
      carName: carName,
      imageUrl: imageUrl,
      rentPrice: rentPrice,
      status: "pending",
    };
    fetch(`http://localhost:3000/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("after placing booking", data);
        if (data.insertedId) {
          bookModalRef.current.close();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your booking has been placed",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <div>
      <MyContainer>
        <h1 className="text-2xl text-purple-950 font-semibold mt-5 p-2 text-center underline">
          {" "}
          Car details{" "}
        </h1>
        <div className="mt-10">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 md:gap-15">
            <div className=" py-3 bg-purple-200 ">
              <img
                className="md:w-200 md:h-100  hover:scale-105 transition-transform duration-200 md:rounded-2xl object-cover p-3"
                src={imageUrl}
                alt={carName}
              />

              <div className="flex justify-between items-center m-5">
                <p className="font-semibold text-gray-600 bg-purple-200 rounded-md p-1">
                  {carName}
                </p>
                <h3 className="font-semibold text-gray-600 bg-purple-200 rounded-md p-1">
                  {carType}
                </h3>
              </div>
              <div>
                <p
                  className="text-center 
              text-gray-600 font-bold  "
                >
                  ______________________________________________________
                </p>
                <p className="text-sm text-gray-500 p-4"> {description}</p>
              </div>
            </div>
            <div className="">
              <div className=" hover:scale-105 transition-transform duration-200">
                <Link to="/" className="flex gap-4 items-center">
                  <FaLongArrowAltLeft /> back to product
                </Link>
                <h1 className="text-3xl font-bold text-pink-900 shadow-2xl m-7 py-3 p-3 rounded-2xl text-center">
                  {carName}
                </h1>
              </div>
              <div className=" py-3 shadow-2xl rounded-2xl p-3 m-7  hover:scale-105 transition-transform duration-200">
                <h1 className="text-xl text-gray-500 font-semibold m-2 underline text-center">
                  product details
                </h1>
                <p className="text-gray-500 text-sm text-center">
                  product ID: {_id}
                </p>
                <p className="text-gray-500 text-sm text-center">
                  posted : {createdAt}
                </p>
              </div>
              <div className=" py-3 shadow-2xl rounded-2xl p-3 m-7  hover:scale-105 transition-transform duration-200">
                <h2 className="underline text-center font-semibold m-2">
                  Provider info:
                </h2>
                <div className="text-center">
                  <p>Provider Name : {providerName}</p>
                  <p>provider email : {created_by}</p>

                  <p>Location : {location}</p>
                  <p>
                    Status :{" "}
                    <span className="text-purple-800 bg-amber-400 p-1 rounded-xl">
                      {" "}
                      {status}
                    </span>
                  </p>
                  <p>Rent per day : £ {rentPricePerDay}</p>
                </div>
              </div>
              <div className=" py-3 shadow-2xl rounded-2xl p-3 m-7  hover:scale-105 transition-transform duration-200">
                <button
                  onClick={handleBookModalOpen}
                  className="my-btn border-none"
                >
                  I want to Book this car Now
                </button>

                <dialog
                  ref={bookModalRef}
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <h3 className="font-bold text-lg text-center text-purple-700">
                      Give the best rent offer !!
                    </h3>
                    <p className="py-4 text-center text-purple-700">
                      Don't need to register for the Offer
                    </p>
                    <form onSubmit={handleBookSubmit}>
                      <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input
                          name="name"
                          type="text"
                          className="input w-full"
                          readOnly
                          defaultValue={user?.displayName || ""}
                        />
                        {/* Email */}
                        <label className="label">Email</label>
                        <input
                          name="rent_email"
                          type="email"
                          className="input w-full"
                          readOnly
                          defaultValue={user?.email || ""}
                        />
                        {/* car name */}
                        <label className="label">Car Name</label>
                        <input
                          name="carName"
                          type="text"
                          className="input w-full"
                          placeholder={user?.carName || ""}
                        />
                        {/* car image */}
                        <label className="label">Car Image Url</label>
                        <input
                          name="imageUrl"
                          type="text"
                          className="input w-full"
                          placeholder={user?.imageUrl || ""}
                        />
                        {/* provider name */}
                        {/* <label className="label">Provider Name</label>
                        <input
                          name="name"
                          type="text"
                          className="input w-full"
                          readOnly
                          defaultValue={user?.displayName || ""}
                        /> */}
                        {/* Booking amount */}
                        <label className="label">Rent price</label>
                        <input
                          name="rentPrice"
                          type="text"
                          className="input w-full"
                          placeholder="£ Rent price"
                        />

                        <button className="btn my-btn mt-4">
                          Place booking
                        </button>
                      </fieldset>
                    </form>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn my-btn">Cancel</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default ViewDetails;
