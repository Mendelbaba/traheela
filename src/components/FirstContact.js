import React from "react";
import { Link } from "react-router-dom";

import "./FirstContact.css";

function FirstContact() {
  return (
    <div>
      <h2>traheela</h2>

      <div className="links">
        <Link to="SignIn">Sign In</Link>
        <Link to="SignUp">Sign Up</Link>
      </div>
    </div>
  );
}

export default FirstContact;
