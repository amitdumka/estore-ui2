import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar  fixed-top navbar-dark bg-primary navbar-expand-lg  justify-content-center ">
            <NavLink className="navbar-brand justify-content-center" extact to="/testme">Users</NavLink>
            <div className="navbar-nav justify-content-end">
                <NavLink exact to="/home2" className="nav-item nav-link">Home</NavLink>
                <NavLink to="/users" className="nav-item nav-link">Users</NavLink>
                <NavLink to="/employees" className="nav-item nav-link">Employees</NavLink>
                <NavLink to="/stores" className="nav-item nav-link">Stores</NavLink>
            </div>
        </nav>
    );
}

export { Nav };