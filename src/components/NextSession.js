import axios from "axios";
import React, { useState, useEffect } from "react";

function NextSession(props) {
  const [workoutA, setWorkoutA] = useState();
  const [workoutB, setWorkoutB] = useState();
  const [workout, setWorkout] = useState(workoutA);

  //   lifts states
  const [squatSuccess, setSquatSuccess] = useState(false);
  const [benchSuccess, setBenchSuccess] = useState(false);
  const [deadLiftSuccess, setDeadLiftSuccess] = useState(false);

  const [squatWeight, setSquatWeight] = useState(0);
  const [benchWeight, setBenchWeight] = useState(0);
  const [deadLiftWeight, setDeadLiftWeight] = useState(0);

  async function onPageLoad() {
    await axios
      .get(`http://localhost:4000/nextSession/${props.currentUser.id}`)
      .then((res) => {
        console.log("res ====>", res.data[0][0].weight);
        const Squat = res.data[0][0].weight;
        const BenchPress = res.data[0][1].weight;
        const Deadlift = res.data[0][2].weight;

        setSquatWeight(Squat);
        setBenchWeight(BenchPress);
        setDeadLiftWeight(Deadlift);
        console.log("SBD=====>", Squat, BenchPress, Deadlift);
      });
  }

  useEffect(() => {
    onPageLoad();
    console.log(benchSuccess, squatSuccess, deadLiftSuccess);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    if (e.target.id === "dl") {
      setDeadLiftSuccess(!deadLiftSuccess);
    } else if (e.target.id === "sq") {
      setSquatSuccess(!squatSuccess);
    } else if (e.target.id === "bp") {
      setBenchSuccess(!benchSuccess);
    }

    if (e.target.className === "success-btn") {
      e.target.className = "great-success";
    } else if (e.target.className === "great-success") {
      e.target.className = "success-btn";
    }
  };

  return (
    <div>
      <form>
        <h2>Squat 5X5 {squatWeight} lbs</h2>
        <button id="sq" className="success-btn" onClick={handleClick}>
          Completed
        </button>
      </form>

      <form>
        <h2>Bench Press 5X5 {benchWeight} lbs</h2>
        <button id="bp" className="success-btn" onClick={handleClick}>
          Completed
        </button>
      </form>

      <form>
        <h2>Deadlift 5X5 {deadLiftWeight} lbs</h2>
        <button id="dl" className="success-btn" onClick={handleClick}>
          Completed
        </button>
      </form>
    </div>
  );
}

export default NextSession;
