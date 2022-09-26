import React from "react";
import { Link } from "react-router-dom";
import classes from "../../styles/Login.module.css";
import LoginSVG from "../assets/images/login.svg";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration image={LoginSVG} />
        <Form className={classes.login}>
          <TextInput
            icon={"alternate_email"}
            type="text"
            placeholder="Enter email"
          />
          <TextInput
            icon={"lock"}
            type="password"
            placeholder="Enter password"
          />
          <Button>
            <span>Submit now</span>
          </Button>
          <div className="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
