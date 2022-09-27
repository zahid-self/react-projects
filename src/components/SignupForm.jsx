import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [checkbox, setCheckbox] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Password does not match!");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(email, password, username);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError("Signup failed!");
      setLoading(false);
    }
  };

  return (
    <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter name"
        icon={"person"}
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextInput
        type="text"
        placeholder="Enter email"
        icon={"alternate_email"}
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Enter password"
        icon={"lock"}
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Confirm password"
        icon={"lock_clock"}
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Checkbox
        text="I agree to the Terms &amp; Conditions"
        required
        value={checkbox}
        onChange={(e) => setCheckbox(e.target.value)}
      />
      <Button disabled={loading} type="submit">
        <span>Submit now</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
};

export default SignupForm;
