import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function About() {
    return (
    
<>
    <Navbar />
    <Hero
      cName="hero-mid"
      heroimg="https://images.unsplash.com/photo-1650638987536-6fbcb9bc6085?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="About Us"
      
      
      btnClass="hide"
    />
    <Aboutus/>
    <Footer/>
 </>
    );
}
export default About;