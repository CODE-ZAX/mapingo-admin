import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import classes from "./Login.module.css";
const Login = () => {
  const { main } = classes;
  return (
    <div className={main}>
      <LoginForm />
    </div>
  );
};

export default Login;
