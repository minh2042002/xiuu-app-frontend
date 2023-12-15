import React from "react";
import { Route, Routes } from "react-router-dom";
import useStyleApp from "./style.js";
import Dashboard from "./components/dashboard/index.js";
import "./index.css";
import ContextWrapper from "./components/your-work/calendar/context/ContextWrapper.js";
import Register from "./components/register/Register.jsx";
import Profile from "./components/profile/Profile.jsx";
import Login from './components/login/login';

const App = (props) => {
  const classes = useStyleApp();

  return (
    <div className={classes.app}>
      <ContextWrapper>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </ContextWrapper>
    </div>
  );
};

export default App;
