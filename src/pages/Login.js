import React, { useState } from "react";
import { setPassword, setUser, setLoggedIn } from "../redux-toolkit/userSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();
  const [user, setuser] = useState("");
  const [password, setpassword] = useState(null);
  const handleLogin = () => {
    dispatch(setUser(user));
    dispatch(setPassword(password));

    if (
      user === process.env.REACT_APP_DASHBOARD_USER &&
      password === process.env.REACT_APP_DASHBOARD_PSW
    ) {
      console.log("yes");
      dispatch(setLoggedIn(true));
    }
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <label>Dashboard</label>
      <input
        type={"text"}
        placeholder="user"
        required
        onChange={(e) => setuser(e.target.value)}
      />
      <input
        type={"text"}
        placeholder="password"
        required
        onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
