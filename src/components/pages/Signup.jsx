import React from "react";
import SignUpSVG from "../assets/images/signup.svg";
import Illustration from "../Illustration";
import SignupForm from "../SignupForm";

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration image={SignUpSVG} />
        <SignupForm />
      </div>
    </>
  );
};

export default Signup;
