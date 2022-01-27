import React from "react";
import NextSession from "./NextSession";

function Dashboard(props) {
  return (
    <div>
      <h2>Heeeeeyyy</h2>
      <NextSession currentUser={props.currentUser} />
    </div>
  );
}

export default Dashboard;
