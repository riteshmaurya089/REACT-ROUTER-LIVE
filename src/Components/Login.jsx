import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

export default function Login() {
  const { setAuthState } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    const formData = { email, password };
    try {
      setAuthState((prev) => ({ ...prev, loading: true }));
      const res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setAuthState((prev) => ({
        ...prev,
        isAuth: true,
        loading: false,
        token: data.token,
      }));
    } catch (error) {
      console.log(error);
      setAuthState((prev) => ({ ...prev, error: "Login Failed" }));
    }
  };
  return (
    <div>
      <form data-testid="auth_form" onSubmit={handleLogin}>
        <input
          type="email"
          data-testid="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            handleEmail(e);
          }}
        />
        <br />
        <input
          type="password"
          data-testid="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            handlePassword(e);
          }}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
