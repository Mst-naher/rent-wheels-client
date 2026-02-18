import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../context/AuthContext';

const MyBooking = () => {
  const { user } = useContext(AuthContext);
const [bookings, setBookings] = useState([])

//  console.log("token", user?.accessToken);

useEffect(()=>{
 
  if(user?.email){ 
    fetch(`http://localhost:3000/bookings?userEmail=${user.email }`, {
      headers: {
        // authorization: `Bearer ${user?.accessToken}`
      }
    }).then(res => res.json()).then(data =>{
      console.log("booked car:" ,data);
      setBookings(data)
    })
  }
},[user?.email])

  return (
    <div>
      <h1>this is my booking {bookings.length} </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
      </div>
    </div>
  );
};

export default MyBooking;