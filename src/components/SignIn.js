import React from "react";
import { useFormik } from "formik";
import axios from "axios";

const initialValues = {
  email: "",
  password: "",
};
const onSubmit = (values) => {
  console.log("form data", values);
};
const validate = (values) => {
  let errors = {};
  if (!values.password) {
    errors.password = "Password is required";
  }

  if (!values.email) {
    errors.email = "E-mail is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }

  return errors;
};

function SignIn() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  //   this console log is to make sure our data is being properly captured and state is being managed
  //   console.log("values", formik.values);

  return (
    <div>
      <div className="form-container">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
          <button type="submit">Sign in </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
