import axios from "axios";
import React, { useState, useEffect } from "react";

import CustomLbs from "./CustomLbs";

function NextSession(props) {
  //   lifts states
  const [squatSuccess, setSquatSuccess] = useState(false);
  const [benchSuccess, setBenchSuccess] = useState(false);
  const [deadLiftSuccess, setDeadLiftSuccess] = useState(false);

  const [squatWeight, setSquatWeight] = useState(0);
  const [benchWeight, setBenchWeight] = useState(0);
  const [deadLiftWeight, setDeadLiftWeight] = useState(0);
  //   buttton classes
  const [squatBtn, setsquatBtn] = useState("success-btn");
  const [benchBtn, setbenchBtn] = useState("success-btn");
  const [deadliftBtn, setdeadliftBtn] = useState("success-btn");

  async function onPageLoad() {
    await axios
      .get(`http://localhost:4000/nextSession/${props.currentUser.id}`)
      .then((res) => {
        // console.log(res.data);
        const Squat = res.data[0][0].weight;
        const BenchPress = res.data[0][1].weight;
        const Deadlift = res.data[0][2].weight;
        // console.log(Squat, BenchPress, Deadlift);
        setSquatWeight(Squat);
        setBenchWeight(BenchPress);
        setDeadLiftWeight(Deadlift);
      });
  }

  useEffect(() => {
    onPageLoad();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    if (e.target.id === "sq") {
      setSquatSuccess(!squatSuccess);
    } else if (e.target.id === "bp") {
      setBenchSuccess(!benchSuccess);
    } else if (e.target.id === "dl") {
      setDeadLiftSuccess(!deadLiftSuccess);
    }

    if (e.target.id === "sq" && e.target.className === "success-btn") {
      setsquatBtn("great-success");
    } else if (e.target.id === "bp" && e.target.className === "success-btn") {
      setbenchBtn("great-success");
    } else if (e.target.id === "dl" && e.target.className === "success-btn") {
      setdeadliftBtn("great-success");
    } else if (e.target.id === "sq" && e.target.className === "great-success") {
      setsquatBtn("success-btn");
    } else if (e.target.id === "bp" && e.target.className === "great-success") {
      setbenchBtn("success-btn");
    } else if (e.target.id === "dl" && e.target.className === "great-success") {
      setdeadliftBtn("success-btn");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newBench = benchSuccess ? benchWeight + 5 : benchWeight;
    let newSquat = squatSuccess ? squatWeight + 5 : squatWeight;
    let newDeadlift = deadLiftSuccess ? deadLiftWeight + 5 : deadLiftWeight;
    let newstats = {
      newBench,
      newDeadlift,
      newSquat,
      id: `${props.currentUser.id}`,
    };

    axios.put(`http://localhost:4000/updateStats`, newstats).then((res) => {
      console.log(res);
    });
    setTimeout(() => {
      onPageLoad();
    }, 500);

    setSquatSuccess(false);
    setBenchSuccess(false);
    setDeadLiftSuccess(false);

    setsquatBtn("success-btn");
    setbenchBtn("success-btn");
    setdeadliftBtn("success-btn");
  };

  return (
    <div>
      <form>
        <h2>Squat 5X5 {squatWeight} lbs</h2>
        <button id="sq" className={squatBtn} onClick={handleClick}>
          Completed
        </button>
      </form>

      <form>
        <h2>Bench Press 5X5 {benchWeight} lbs</h2>
        <button id="bp" className={benchBtn} onClick={handleClick}>
          Completed
        </button>
      </form>

      <form>
        <h2>Deadlift 5X5 {deadLiftWeight} lbs</h2>
        <button id="dl" className={deadliftBtn} onClick={handleClick}>
          Completed
        </button>

        <button onClick={handleSubmit}>Submit</button>
      </form>
      <div className="line-brk" />

      {!deadLiftWeight ? null : (
        <CustomLbs
          benchWeight={benchWeight}
          deadLiftWeight={deadLiftWeight}
          squatWeight={squatWeight}
          setBenchWeight={setBenchWeight}
          setSquatWeight={setSquatWeight}
          setDeadLiftWeight={setDeadLiftWeight}
        />
      )}
    </div>
  );
}

export default NextSession;
