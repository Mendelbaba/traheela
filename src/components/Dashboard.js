import React from "react";
import { Route, Routes } from "react-router";

import { Link } from "react-router-dom";
import NextSession from "./NextSession";
import Guides from "./Guides";

function Dashboard(props) {
  return (
    <div>
      <h2 style={{ fontFamily: "papyrus" }}>Traheela</h2>
      <div className="links">
        <Link to="Guides">Guides</Link>
        <Link to="NextSession">Update Progress</Link>
      </div>
      <Routes>
        <Route path="Guides" element={<Guides />} />
        <Route
          path="NextSession"
          element={<NextSession currentUser={props.currentUser} />}
        />
      </Routes>
    </div>
  );
}

export default Dashboard;
