import React from "react";
import { NavLink, Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className={"nav-item nav-link" + ""} to="/movies">
            Movies <span className="sr-only">(current)</span>
          </NavLink>
          <NavLink className={"nav-item nav-link" + ""} to="/customers">
            Customers
          </NavLink>
          <NavLink className={"nav-item nav-link" + ""} to="/rentals">
            Rentals
          </NavLink>
          <NavLink className={"nav-item nav-link" + ""} to="/login">
            Login
          </NavLink>
          <NavLink className={"nav-item nav-link" + ""} to="/Register">
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
