import React from 'react';
import {Outlet} from 'react-router-dom';
const Contact=()=>{
    return(
        <>
        <h1>Contact Page</h1>
        <Outlet/>
        </>
    );
}
export default Contact;