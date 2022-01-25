import axios from "axios";
import React, { useState, useEffect } from "react";

function NextSession() {
  const [workoutA, setWorkoutA] = useState();
  const [workoutB, setWorkoutB] = useState();
  const [workout, setWorkout] = useState(workoutA);

  async function onPageLoad() {
    await axios.get("http://localhost:4000/nextSession").then((res) => {
      //   console.log(res.data);
      setWorkoutA(res.data[0]["Workout-A"]);
      setWorkoutB(res.data[1]["Workout-B"]);
    });
  }

  useEffect(() => {
    onPageLoad();
  }, []);
  return (
    <div>
      <div>
        <h1>{JSON.stringify(workoutA)}</h1>
        {workoutA ? <h2>{workoutA[0]["exercise"]}</h2> : null}
        {/* <h2>{workoutA[0]["exercise"]}</h2> */}
      </div>
    </div>
  );
}

export default NextSession;
