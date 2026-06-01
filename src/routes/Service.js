import { useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import DestinationForm from "../components/DestinationForm";  // ✔ correct

function Service() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar />

      <Hero
        cName="hero-mid"
        heroimg="https://images.unsplash.com/photo-1764082004563-710bf8df475a?q=80"
        title="Service"
        buttonText="Book Now"
        btnClass="show"
        onClick={() => setShowForm(true)}

      />

      <Trip />
      <Footer />

      {showForm && <DestinationForm onClose={() => setShowForm(false)} />}
    </>
  );
}

export default Service;
