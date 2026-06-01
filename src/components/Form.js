import "./Form.css";
import { useState } from "react";
import API from "../api";   // ✅ add this

function Form() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // 🔄 Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🚀 Submit to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/contact", formData);

      alert("Your message has been sent! ✔");

      // 🔄 reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Error sending message!");
    }
  };

  return (
    <div className="form-container">
      <h1>Send a message to us</h1>

      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Your Name" 
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <input 
          placeholder="Your Email" 
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <input 
          placeholder="Subject" 
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
        />

        <textarea 
          rows="6" 
          placeholder="Your Message" 
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;