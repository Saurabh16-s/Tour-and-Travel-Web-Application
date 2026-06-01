import { useState } from "react";
import API from "../api";
import "./Dstyles.css";

function SignupForm({ onClose }) {

  const [formData, setFormData] = useState({
    name: "",
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
      // ✅ CALL SPRING BOOT
      await API.post("/auth/register", formData);

      alert("Signup Successful!");
      onClose();

    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Signup Failed!");
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            name="name"
            required
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

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

          <button className="submit-btn">Sign Up</button>
        </form>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default SignupForm;