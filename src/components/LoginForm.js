import { useState } from "react";
import API from "../api";
import "./Dstyles.css";

function LoginForm({ onClose }) {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", formData);

      

      console.log("LOGIN RESPONSE:", res.data);   
      console.log("TOKEN FIELD:", res.data.token);

      localStorage.setItem("token", res.data.token);

      console.log("STORED:", localStorage.getItem("token")); 
      alert("Login Successful ✔");

      onClose(); 

    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Login Failed!");
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>

          <label>Email</label>
          <input
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            name="password"
            type="password"
            required
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />

          <button className="submit-btn">Login</button>
        </form>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default LoginForm;