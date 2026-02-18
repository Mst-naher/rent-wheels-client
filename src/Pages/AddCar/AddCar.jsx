import React, { useContext } from "react";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const AddCar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      description: e.target.description.value,
      category: e.target.category.value,
      carRent: e.target.price.value,
      location: e.target.location.value,
      name: e.target.photourl?.value || "",
      providerName: e.target.providerName.value,
      carName: e.target.carName.value,
      created_by: user.email,
      created_at: new Date(),
    };
    console.log(formData);

    fetch("http://localhost:3000/addedCars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after saving user", data);
        if (data.insertedId) {
          formData._id = data.insertedId;
          const newUsers = [...user, formData];
          setUsers(newUsers);
          toast.success("user added successfully");
          e.target.reset();
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  return (
    <MyContainer className="m-10">
      {/* <MyListing  userPromise={userPromise}></MyListing> */}
      <div className="card bg-base-200 w-full mx-auto max-w-lg shrink-0 shadow-xl ">
        <h4 className="text-2xl font-bold text-center text-gray-600 underline m-5">
          Car Selection
        </h4>
        <form onSubmit={handleSubmit} className="card-body bg-amber-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <div>
                <fieldset className="fieldset">
                  <label className="block text-sm font-medium mb-1">
                    Car Name
                  </label>
                  <input
                    type="text"
                    name="carName"
                    placeholder="Car Name"
                    className="input input-bordered w-full mb-2  bg-gray-100 font-sm text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </fieldset>
              </div>

              {/* Description field */}
              <div>
                <fieldset>
                  <label className="block text-sm font-medium mb-1">
                    Description
                  </label>
                  <textarea
                    type="text"
                    required
                    name="description"
                    rows="2"
                    placeholder="Enter description"
                    className="textarea rounded-2xl focus:border-0 focus:outline-gray-200 h-[150px]
              w-full mb-1 bg-gray-100  text-sm
              "
                  ></textarea>
                </fieldset>
              </div>

              {/* Categori Dropdown */}
              <div className=" my-8">
                <fieldset>
                  <label className="block text-sm font-medium ">
                    Category of Car
                  </label>
                  <select
                    defaultValue={""}
                    name="category"
                    required
                    className="select select-primary w-full"
                  >
                    <option disabled={true}>Pick a Car</option>
                    <option> Electric</option>
                    <option> Luxury</option>
                    <option>Hatchback</option>
                    <option>SUV</option>
                    <option>Sedan</option>
                  </select>
                </fieldset>
              </div>
            </div>
            <div>
              {/* Location */}

              <div className=" my-2">
                <fieldset>
                  <label className="block text-sm font-medium mb-1">
                    Location
                  </label>
                  <select
                    name="location"
                    defaultValue="Pick a Location "
                    className="select select-primary bg-base-100 w-full"
                  >
                    <option disabled={true}>Seclect your location</option>
                    <option> Oxford, UK</option>
                    <option> Manchester, UK</option>
                  </select>
                </fieldset>
              </div>
              {/* photo field */}
              <div>
                <fieldset>
                  <label className="block text-sm font-medium mb-1">
                    Hosted photo url
                  </label>
                  <input
                    type="url"
                    name="photourl"
                    placeholder="Your photo url here"
                    className="input input-bordered w-full mb-2  bg-gray-100 font-sm text-sm  focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </fieldset>
              </div>
              {/* Rent Price */}
              <div>
                <fieldset>
                  <label className="block text-sm font-medium mb-1">
                    Car Rent: £ (Par Day)
                  </label>
                  <input
                    type="number"
                    name="price"
                    placeholder="Par day price"
                    className="input input-bordered w-full mb-2  bg-gray-100 "
                  />
                </fieldset>
              </div>
              {/* Provider Name */}
              <div>
                <fieldset>
                  <label className="block text-sm font-medium mb-1">
                    Provider Name
                  </label>
                  <input
                    type="text"
                    name="providerName"
                    placeholder="Provider Name"
                    className="input input-bordered w-full mb-2  bg-gray-100 font-sm text-sm  focus:outline-none focus:ring-2 focus:ring-pink-400"
                    readOnly
                    defaultValue={user?.displayName}
                  />
                </fieldset>
              </div>
              {/* Provider Email */}
              <div>
                <fieldset>
                  <label className="block text-sm font-medium mb-1">
                    Provider Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Provider Email"
                    className="input input-bordered w-full mb-2  bg-gray-100 font-sm text-sm  focus:outline-none focus:ring-2 focus:ring-pink-400"
                    readOnly
                    defaultValue={user?.email}
                  />
                </fieldset>
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="Add a Car"
            className="btn btn-primary text-gray-600"
          />
        </form>
      </div>
    </MyContainer>
  );
};

export default AddCar;
