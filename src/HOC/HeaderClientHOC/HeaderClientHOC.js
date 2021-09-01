import React from 'react';
import {NavLink} from "react-router-dom";
import './headerClientHoc.scss'

const HeaderClientHoc = ({children}) => {
    return (
        <>
            <navbar className="navbar navbar-dark headerClientHoc">
                <NavLink className='navbar-brand' to='/'>Home</NavLink>
                <NavLink className='navbar-brand' to='/News'>News</NavLink>
                <NavLink className='navbar-brand' to='/Our products'>Our products</NavLink>
                {/*<NavLink className='navbar-brand' to='/GoogleMapsAdminPage'>Google-Maps-Admin</NavLink>*/}
                {/*<NavLink className='navbar-brand' to='/NewsAdminPage'>NewsAdminPage</NavLink>*/}
            </navbar>

            {children}

            {/*<footer> FOOT </footer>*/}
        </>
    );
};

export default HeaderClientHoc;