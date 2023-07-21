import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
const PrivateComponent = () => {
    const auth = localStorage.getItem('user');
    return auth?<Outlet/>:<Navigate to="/SignUp"/>

  
}

export default PrivateComponent

/*
This component serves the purpose of restricting access to other components, 
such as Products and Add Products, unless the user has signed up.
*/
