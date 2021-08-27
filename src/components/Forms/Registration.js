import React from "react";
import "../../styles/forms.scss";
import registration from "../../images/OGFB4B0.jpg";
import { Link, useHistory, useLocation } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";
import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../../App";
import { useForm } from "react-hook-form";
const Registration = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/dashboard" } };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [user, setUser] = useContext(UserContext);
  const [err, setErr] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
    if (data.email && data.password) {
      if (data.password === data.conPass) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(data.email, data.password)
          .then((res) => {
            const userInfo = {
              name: data.name,
              email: data.email,
            };
            updateInfo(data.name);
            setUser(userInfo);
            const newError = "";
            setErr(newError);
            history.replace(from);
          })
          .catch((error) => {
            setErr(error.message);
          });
      } else {
        setErr(`Password didn't match`);
      }
    }
  };
  const updateInfo = (name) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(() => {
        // Update successful
        // ...
      })
      .catch((error) => {
        setErr(error.message);
        // ...
      });
  };
  return (
    <div className="container">
      <div className="row pt-5 ">
        <div className="col-md-6">
          <div className="login  ">
            <h5 className="text-secondary">Registration</h5>
          </div>
          <div className="form-container shadow-sm border-0 pb-5 px-5">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="txt-field mb-4">
                <input
                  {...register("name", { required: true })}
                  type="text"
                  required
                  name="name"
                />
                <br />
                {errors.name && (
                  <span className="text-danger">Name is required*</span>
                )}

                <span></span>
                <label htmlFor="name">Name</label>
              </div>
              <div className="txt-field mb-4">
                <input
                  {...register("email", { required: true })}
                  type="email"
                  required
                  name="email"
                ></input>
                <span></span>
                <label htmlFor="email">Email</label>
              </div>
              <div className="txt-field mb-4">
                <input
                  {...register("phone", { required: true, minLength: 11 })}
                  type="text"
                  required
                  name="phone"
                ></input>
                <span></span>
                <label htmlFor="phone">Phone</label>
              </div>
              <div className="txt-field mb-4">
                <input
                  {...register("password", { required: true })}
                  type="password"
                  required
                  name="password"
                ></input>
                <span></span>
                <label htmlFor="password">Password</label>
              </div>
              <div className="txt-field mb-4">
                <input
                  {...register("conPass", { required: true })}
                  type="password"
                  required
                  name="conPass"
                ></input>
                <span></span>
                <label htmlFor="conPass"> Confirm Password</label>
              </div>
              <input type="submit" value="Sign Up" className="sign-btn mb-2" />
              <div className="signup-link text-center">
                <small className="text-danger">{err}</small>
                Already have an account?
                <Link
                  to="/login"
                  className="mx-3 text-decoration-none text-hover"
                >
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <img src={registration} alt="" className="img-fluid login-img" />
        </div>
      </div>
    </div>
  );
};

export default Registration;
