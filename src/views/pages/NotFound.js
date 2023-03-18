import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <h1> 404 NOT FOUND</h1>
      <div className="d-flex flex-column m-5">
        <Link to="/">Go to home page</Link>
        <Link to="/login">Go to login page</Link>
      </div>
    </div>
  );

}
export default NotFound