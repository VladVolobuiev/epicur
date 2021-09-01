import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderAdminHoc = ({children}) => {
    return (
        <>
            <navbar className="navbar navbar-dark bg-primary">
                <NavLink className='navbar-brand' to='/'>Home</NavLink>
                <NavLink className='navbar-brand' to='/AdminProducts'>AdminProducts</NavLink>
                <NavLink className='navbar-brand' to='/GoogleMapsAdminPage'>Google-Maps-Admin</NavLink>
                <NavLink className='navbar-brand' to='/NewsAdminPage'>NewsAdminPage</NavLink>
            </navbar>

            {children}

            {/*<footer> FOOT </footer>*/}
        </>
    );
};

export default HeaderAdminHoc;