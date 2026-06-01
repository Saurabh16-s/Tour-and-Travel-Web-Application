
import React, { useState } from "react";
import API from "../api";   // ✅ important
import "./Dstyles.css";

function DestinationForm({ onClose }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    date: "",
    travelers: 1,
    notes: "",
  });

  // 🔄 Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🧠 Map destination → ID (temporary solution)
  const getDestinationId = (destination) => {
    const map = {
      dehradun: 1,
      rishikesh: 2,
      haridwar: 3,
      badrinath: 4,
      kedarnath: 5,
      mussoorie: 6,
      nainital: 7
    };
    return map[destination];
  };

  // 🚀 Submit booking
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token"); // 🔥 get token

    console.log("Destination:", formData.destination);
    console.log("Destination ID:", getDestinationId(formData.destination));

    await API.post(
      "/bookings",
      {
        checkInDate: formData.date,
        checkOutDate: formData.date,
        guests: formData.travelers,
        destinationId: getDestinationId(formData.destination)
      },
      
    );

    alert("Booking successful ✔");
    onClose();

  } catch (error) {
    console.log(error.response?.data || error.message);
    alert("Booking failed!");
  }
};

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Book Your Trip</h2>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>
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

          <label>Phone</label>
          <input
            name="phone"
            required
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
          />

          <label>Destination</label>
          <select
            name="destination"
            required
            value={formData.destination}
            onChange={handleChange}
          >
            <option value="">Select Destination</option>
            <option value="dehradun">Dehradun</option>
            <option value="rishikesh">Rishikesh</option>
            <option value="haridwar">Haridwar</option>
            <option value="badrinath">Badrinath</option>
            <option value="kedarnath">Kedarnath</option>
            <option value="mussoorie">Mussoorie</option>
            <option value="nainital">Nainital</option>
          </select>

          <label>Travel Date</label>
          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
          />

          <label>Number of Travelers</label>
          <input
            type="number"
            name="travelers"
            min="1"
            required
            value={formData.travelers}
            onChange={handleChange}
          />

          <label>Notes</label>
          <textarea
            name="notes"
            placeholder="Any additional information..."
            value={formData.notes}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">
            Submit Booking
          </button>
        </form>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default DestinationForm;