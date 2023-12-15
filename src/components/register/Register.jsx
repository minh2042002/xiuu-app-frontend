import React from "react";
import "./register.css";
import logo from "./logo.png";
import { LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate()
  return (
    <div className="section">
      <div className="container1">
        <div className="signup-form">
          <div className="logo-container1">
            <img src={logo} alt="" />
            <h1 className="h1" style={{fontWeight:"bold"}}>Xiuu</h1>
          </div>

          <form onSubmit={()=>navigate("/login")}>
            <input type="text" placeholder=" FULL NAME" />
            <input type="text" placeholder=" USER NAME" />
            <input type="password" placeholder=" PASSWORD" />
            <input type="password" placeholder=" CONFIRM PASSWORD" />
            <input type="submit" value="SIGN UP" />
          </form>
          <a class="question">Are you already have an account?</a>
          <a onClick={(e)=>navigate("/login")} style={{cursor:"pointer"}}> Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
