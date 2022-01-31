import React, { useState } from "react";
import { useFormik } from "formik";

function CustomLbs(props) {
  const onSubmit = (values) => {
    props.setSquatWeight(values.squat);
    console.log(values);

    props.setBenchWeight(values.bench);

    props.setDeadLiftWeight(values.deadlift);
  };

  //   const [squatWeight, setSquatWeight] = useState(props.squatWeight);

  console.log(props.benchWeight);

  const initialValues = {
    squat: props.squatWeight,
    bench: props.benchWeight,
    deadlift: props.deadLiftWeight,
  };

  const validate = (values) => {
    let errors = {};
    if (isNaN(values.squat) === false) {
      errors.squat = "Input must be a number";
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const revealElement = (e) => {
    console.log(e.target.id);
    if (e.target.id === "squat-changer") {
      let sq = document.getElementById("custom-lbs-sq");
      sq.id = "reveal-sq";
    } else if (e.target.id === "bench-changer") {
      let bp = document.getElementById("custom-lbs-bp");
      bp.id = "reveal-bp";
    } else if (e.target.id === "deaLift-changer") {
      let dl = document.getElementById("custom-lbs-dl");
      dl.id = "reveal-dl";
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
      <div id="custom-lbs-sq">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="squat">Squat</label>
          <input
            type="number"
            id="squat"
            name="squat"
            min="1"
            max="1200"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.squat}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div id="custom-lbs-bp">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="bench">Bench</label>
          <input
            type="number"
            id="bench"
            name="bench"
            min="1"
            max="1200"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.bench}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div id="custom-lbs-dl">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="deadlift">Deadlift</label>
          <input
            type="number"
            id="deadlift"
            name="deadlift"
            min="1"
            max="1100"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.deadlift}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CustomLbs;
