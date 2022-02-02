import React from "react";
import "./SignUp.css";
import { useFormik } from "formik";
import axios from "axios";

// const initialValues = {
//   email: "",
//   password: "",
//   passwordConfirmation: "",
// };
// const onSubmit = (values) => {
//   axios
//     .post("http://localhost:4000/register", values)
//     .then((res) => {
//       console.log(res.data);
//       localStorage.setItem("email", res.data[0][0].email);
//       localStorage.setItem("user_id", res.data[0][0].user_id);
//       props.setIsLoggeIn(true);
//     })
//     .catch((err) => console.log(err.response.data));
// };

// const validate = (values) => {
//   let errors = {};

//   if (!values.email) {
//     errors.email = "E-mail address equired";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email format";
//   }
//   if (!values.password) {
//     errors.password = "Password is required";
//   }
//   if (!values.passwordConfirmation) {
//     errors.passwordConfirmation = "Password confirmation is required";
//   } else if (values.passwordConfirmation !== values.password) {
//     errors.passwordConfirmation = "Password fields must match";
//   }

//   return errors;
// };

function Signup(props) {
  const initialValues = {
    email: "",
    password: "",
    passwordConfirmation: "",
  };
  const onSubmit = (values) => {
    axios
      .post("http://localhost:4000/register", values)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("email", res.data[0][0].email);
        localStorage.setItem("user_id", res.data[0][0].user_id);
        props.setIsLoggedIn(true);
      })
      .catch((err) => console.log(err.response.data));
  };

  const validate = (values) => {
    let errors = {};

    if (!values.email) {
      errors.email = "E-mail address equired";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email format";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.passwordConfirmation) {
      errors.passwordConfirmation = "Password confirmation is required";
    } else if (values.passwordConfirmation !== values.password) {
      errors.passwordConfirmation = "Password fields must match";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  //   this console log is to make sure our data is being properly captured and state is being managed
  //   console.log("values", formik.values);

  return (
    <div>
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
        <label htmlFor="passwordConfirmation">Password Confirmation</label>
        <input
          type="password"
          id="passwordConfirmation"
          name="passwordConfirmation"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.passwordConfirmation}
        />
        {formik.touched.passwordConfirmation &&
        formik.errors.passwordConfirmation ? (
          <div className="error">{formik.errors.passwordConfirmation}</div>
        ) : null}
        <button type="submit">Sign up </button>
      </form>
    </div>
  );
}

export default Signup;
