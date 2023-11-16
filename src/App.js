import React, { useContext } from "react";
import Login from "./Components/Login";
import { AuthContext } from "./Context/AuthContextProvider";
import { Dashboard } from "./Components/Dashboard";

export default function App() {
  const { authState } = useContext(AuthContext);
  console.log(authState.isAuth);
  return <div>{authState.isAuth ? <Dashboard /> : <Login />}</div>;
}
