import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useUser } from "../../context/UserContext";
import classes from "./LoginForm.module.css";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [authErr, setAuthErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useUser();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    var emailE = false,
      passwordE = false;
    console.log("i am called");
    console.log(email);
    if (email.length === 0) {
      console.log("here");
      emailE = true;
      setEmailErr("Email cannot be empty. ");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      emailE = true;
      setEmailErr("Invalid email.");
    } else {
      emailE = false;
      setEmailErr("");
    }
    if (password.length === 0) {
      passwordE = true;
      setPasswordErr("Password cannot be empty ");
    } else if (password.length < 8) {
      passwordE = true;
      setPasswordErr("Password should be atleast 8 characters long.");
    } else {
      passwordE = false;
      setPasswordErr("");
    }

    if (!emailE && !passwordE) {
      setIsLoading(true);
      login(email, password)
        .then((e) => {
          navigate("/dashboard");
        })
        .catch((e) => {
          setAuthErr(e.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={"text-center mb-4 " + classes.pClr}>
        <h1>MAPINGO ADMIN</h1>
      </div>

      {authErr.length === 0 ? null : (
        <div className="text-center text-danger">
          <small>{authErr}</small>
        </div>
      )}
      <div className={"form-floating mb-2"}>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className={
            emailErr.length === 0 ? "form-control" : "form-control is-invalid"
          }
          id="floatingInput"
          placeholder="name@example.com"
        />
        <div className="invalid-feedback">{emailErr}</div>
        <label className="floating-label">Email</label>
      </div>
      <div className={"form-floating mb-2"}>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className={
            passwordErr.length === 0
              ? "form-control"
              : "form-control is-invalid"
          }
          id="floatingInput"
          placeholder="name@example.com"
        />
        <div className="invalid-feedback">{passwordErr}</div>
        <label className="floating-label">Password</label>
      </div>
      <div className="checkbox mb-3">
        <label>
          <input
            type="checkbox"
            defaultValue="remember-me"
            className={classes.chkBox}
          />{" "}
          Remember me
        </label>
      </div>
      {isLoading ? (
        <div className="text-center">Loading</div>
      ) : (
        <button
          className={"w-100 btn btn-lg text-light " + classes.customBtn}
          type="submit"
        >
          Sign in
        </button>
      )}
      <p className="text-center mt-5 mb-3 text-muted">© 2021–2023</p>
    </form>
  );
};

export default LoginForm;
