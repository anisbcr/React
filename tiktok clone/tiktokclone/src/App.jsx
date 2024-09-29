import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import VideoFeed from "./components/VideoFeed/VideoFeed";
import Login from "./components/Login/Login";
import "./Style.css";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<VideoFeed />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
