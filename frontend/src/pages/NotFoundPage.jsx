import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h2>404 </h2>
      <p>Sorry, the page is not found</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default NotFoundPage;
