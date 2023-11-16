import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

export const Dashboard = () => {
  const { authState, setAuthState } = useContext(AuthContext);
  const handleLogout = () => {
    setAuthState((prev) => ({ ...prev, isAuth: false, token: "" }));
  };
  return (
    <div>
      <h3 data-testid="token">Token: {authState.token}</h3>
      <button data-testid="logout" onClick={handleLogout}>
        LOGOUT
      </button>
    </div>
  );
};
