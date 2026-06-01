import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
    <Navbar />
    <Hero
      cName="hero"
      heroimg="https://images.unsplash.com/photo-1698574996391-73f103113f60?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="Your Journey Your Story"
      text="Choose Your Favourite Destination"
      buttonText="Travel Plan"
      url="/"
      btnClass="show"
    />
    <Destination />
    <Trip />
    <Footer />
    </>
  );
}
export default Home;