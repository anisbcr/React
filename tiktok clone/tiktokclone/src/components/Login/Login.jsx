import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/AuthSlice";
import "../Login/Login.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username) {
      dispatch(login({ username }));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
