import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">List</Link>
      <Link style={{ marginLeft: "10px" }} to="/add">
        Add
      </Link>
    </div>
  );
};

export default Header;
