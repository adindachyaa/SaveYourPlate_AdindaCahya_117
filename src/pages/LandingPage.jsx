import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <h1>Save Your Plate</h1>
      <p>
        Mari kita sayangi bumi dengan mengurangi food waste!  
        Setiap makanan yang tersisa bisa menjadi peluang untuk perubahan.
      </p>
      <div className="buttons">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Landing;
