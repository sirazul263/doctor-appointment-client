import React from "react";
import login from "../../images/login.png";
import "../../styles/forms.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { Link, useHistory, useLocation } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";
import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../../App";
import { useForm } from "react-hook-form";

const Login = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const facebookProvider = new firebase.auth.FacebookAuthProvider();

  const [user, setUser] = useContext(UserContext);
  const [err, setErr] = useState([]);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const onSubmit = (data) => {
    if (data.email && data.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
          const name = currentUser();
          const userInfo = {
            name: name,
            email: data.email,
          };
          setUser(userInfo);
          history.replace(from);
          // ...
        })
        .catch((error) => {
          var errorMessage = error.message;
          setErr(errorMessage);
        });
    }
  };
  const currentUser = () => {
    const user = firebase.auth().currentUser;

    if (user) {
      const name = user.displayName;
      return name;
    }
  };

  const signInWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const users = result.user;
        const userInfo = {
          name: users.displayName,
          email: users.email,
          image: users.photoURL,
        };
        setUser(userInfo);
        storeAuthToken();
      })
      .catch((error) => {
        setErr(error.message);
      });
  };
  const signInWithFacebook = () => {
    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then((result) => {
        const users = result.user;
        const userInfo = {
          name: users.displayName,
          email: users.email,
          image: users.photoURL,
        };
        setUser(userInfo);
        setErr("");
      })
      .catch((error) => {
        setErr(error.message);
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        console.log(idToken);
        sessionStorage.setItem("token", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle error
      });
  };
  return (
    <div className="container">
      <div className="row pt-5 ">
        <div className="col-md-6">
          <div className="login  ">
            <h5 className="text-secondary">Login</h5>
          </div>
          <div className="form-container shadow-sm border-0 pb-5 px-5">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("password", { required: true })}
                  type="password"
                  required
                  name="password"
                ></input>
                <span></span>
                <label htmlFor="password">Password</label>
              </div>
              <div className=" mb-4">
                <small className="text-danger pass">Forget Password?</small>
              </div>
              <input type="submit" value="Sign In" className="sign-btn mb-2" />
              <div className="signup-link text-center">
                <small className="text-danger">{err}</small>
                <br />
                Haven't a account?
                <Link
                  to="/registration"
                  className="mx-5 text-decoration-none text-hover"
                >
                  Sign Up
                </Link>
              </div>
            </form>
            <hr />
            <p className="text-center mb-1 mt-0">Or</p>
            <p className="text-center">Sign In With</p>
            <div className="d-flex justify-content-between ">
              <button className="social-btn me-auto" onClick={signInWithGoogle}>
                {" "}
                <FontAwesomeIcon
                  icon={faGooglePlusG}
                  className="mx-2 text-danger"
                ></FontAwesomeIcon>{" "}
                Google
              </button>
              <button className="social-btn" onClick={signInWithFacebook}>
                {" "}
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="mx-2 text-success"
                ></FontAwesomeIcon>{" "}
                Facebook
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <img src={login} alt="" className="img-fluid login-img" />
        </div>
      </div>
    </div>
  );
};

export default Login;
