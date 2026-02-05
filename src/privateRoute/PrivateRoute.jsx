import React, {useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { ScaleLoader } from 'react-spinners';

const PrivateRoute = ({children}) => {
const {user, loading} = useContext(AuthContext);

const location = useLocation();
console.log(location);

if(loading){
return (
  <div className="h-[97vh] flex items-center justify-center">
    <ScaleLoader color="#724B88" />
  </div>
);
}


if(!user){
return <Navigate to="/login" state={location.pathname}></Navigate>
}

  return children
};

export default PrivateRoute;