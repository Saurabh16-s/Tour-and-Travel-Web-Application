import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import Form from "../components/Form";   // your existing form

function Contact() {  
    return (
<>
  <Navbar />

  <Hero
    cName="hero-mid"
    heroimg={AboutImg}
    title="Contact Us"
    btnClass="hide"
  />

  {/* CONTACT INFO SECTION */}
  <div className="contact-info">
    <h2>Our Details</h2>

    <p><strong>Phone:</strong> +91 98765 43210</p>
    <p><strong>Phone:</strong> +91 91234 56789</p>

    <p><strong>Email:</strong> info@travelagency.com</p>
    <p><strong>Email:</strong> support@travelagency.com</p>

    <p><strong>Instagram:</strong> Trippy</p>


     <p><strong>Youtube:</strong> TrippyTour</p>
      <p><strong>Facebook:</strong> Trippy</p>
</div>

  {/* YOUR EXISTING CONTACT FORM */}
  <Form />

  <Footer/>
</>
    );
}

export default Contact;
