import { useState } from "react";
import API from "../api";

function BookingForm({ destinationId }) {
  const [booking, setBooking] = useState({
    checkInDate: "",
    checkOutDate: "",
    guests: 1
  });

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      await API.post("/bookings", {
        ...booking,
        destinationId
      });

      alert("Booking successful");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <form onSubmit={handleBooking}>
      <input type="date"
        onChange={(e)=>setBooking({...booking, checkInDate:e.target.value})}/>
      
      <input type="date"
        onChange={(e)=>setBooking({...booking, checkOutDate:e.target.value})}/>
      
      <input type="number" min="1"
        onChange={(e)=>setBooking({...booking, guests:e.target.value})}/>
      
      <button>Book Now</button>
    </form>
  );
}

export default BookingForm;