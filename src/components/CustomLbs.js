import React, { useState } from "react";
import { useFormik } from "formik";

function CustomLbs(props) {
  //   const onSubmit = (values) => {
  //     props.setSquatWeight(values.squat);

  //     props.setBenchWeight(values.bench);

  //     props.setDeadLiftWeight(values.deadlift);
  //   };

  //   custom lbs button id's
  const [sqId, setsqId] = useState("custom-lbs-sq");
  const [bpId, setbpId] = useState("custom-lbs-bp");
  const [dlId, setdlId] = useState("custom-lbs-dl");

  const [submitSq, setsubmitSq] = useState("");
  const [submitBp, setsubmitBp] = useState("");
  const [submitDl, setsubmitDl] = useState("");

  const onSubmitSq = (e) => {
    e.preventDefault();
    props.setSquatWeight(parseInt(submitSq));
  };

  const onSubmitBp = (e) => {
    e.preventDefault();
    props.setBenchWeight(parseInt(submitBp));
  };

  const onSubmitDl = (e) => {
    e.preventDefault();
    props.setDeadLiftWeight(parseInt(submitDl));
  };

  const initialValues = {
    squat: props.squatWeight,
    bench: props.benchWeight,
    deadlift: props.deadLiftWeight,
  };

  const validate = (values) => {
    let errors = {};
  };

  const formik = useFormik({
    initialValues,
    // onSubmit,
    validate,
  });

  const revealElement = (e) => {
    console.log(e.target.id);
    if (e.target.id === "squat-changer" && sqId === "custom-lbs-sq") {
      setsqId("reveal-sq");
    } else if (e.target.id === "bench-changer" && bpId === "custom-lbs-bp") {
      setbpId("reveal-bp");
    } else if (e.target.id === "deaLift-changer" && dlId === "custom-lbs-dl") {
      setdlId("reveal-dl");
    } else if (e.target.id === "squat-changer" && sqId === "reveal-sq") {
      setsqId("custom-lbs-sq");
    } else if (e.target.id === "bench-changer" && bpId === "reveal-bp") {
      setbpId("custom-lbs-bp");
    } else if (e.target.id === "deaLift-changer" && dlId === "reveal-dl") {
      setdlId("custom-lbs-dl");
    }
    // id="custom-lbs-dl"
  };

  return (
    <div>
      <h2>enter different values</h2>
      <button id="squat-changer" onClick={revealElement}>
        Change squat
      </button>
      <button id="bench-changer" onClick={revealElement}>
        Change bench press
      </button>
      <button id="deaLift-changer" onClick={revealElement}>
        Change deadlift
      </button>

      {/* <label htmlFor="squat"></label>
      <input type="text" id="squat" placeholder="Enter a number" />
      <button onClick={handleClick}>lbs</button> */}
      <div id={sqId}>
        <form>
          <label htmlFor="squat">Squat</label>
          <input
            type="number"
            id="squat"
            name="squat"
            min="1"
            max="1200"
            onChange={(e) => setsubmitSq(e.target.value)}
          />
          <button onClick={onSubmitSq}>Submit</button>
        </form>
      </div>
      <div id={bpId}>
        <form>
          <label htmlFor="bench">Bench</label>
          <input
            type="number"
            id="bench"
            name="bench"
            min="1"
            max="1200"
            onChange={(e) => setsubmitBp(e.target.value)}
          />
          <button onClick={onSubmitBp}>Submit</button>
        </form>
      </div>
      <div id={dlId}>
        <form>
          <label htmlFor="deadlift">Deadlift</label>
          <input
            type="number"
            id="deadlift"
            name="deadlift"
            min="1"
            max="1100"
            onChange={(e) => setsubmitDl(e.target.value)}
          />
          <button onClick={onSubmitDl}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CustomLbs;
