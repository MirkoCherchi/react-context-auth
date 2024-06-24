import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./components/contexts/AuthContext";

function PrivateNavLinks() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <li>
        <Link to="/posts">Posts</Link>
      </li>

      {isAuthenticated && (
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      )}
      {isAuthenticated && (
        <li>
          <Link to="/create-post">Create Post</Link>
        </li>
      )}
      {!isAuthenticated && (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
}

export default PrivateNavLinks;
