import React from "react";
import { Route, Routes } from "react-router";
import FirstContact from "./FirstContact";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

function LandingPage(props) {
  return (
    <div>
      <FirstContact />
      <Routes>
        <Route
          path="SignUp"
          element={<SignUp setIsLoggedIn={props.setIsLoggedIn} />}
        />
        <Route
          path="SignIn"
          element={<SignIn logFunction={props.logFunction} />}
        />
      </Routes>
    </div>
  );
}

export default LandingPage;
