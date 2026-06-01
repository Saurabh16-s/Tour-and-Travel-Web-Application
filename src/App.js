

import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./routes/Contact";
import Service from "./routes/Service";
import About from "./routes/About"; 
import Home from "./routes/Home";
import ChatWidget from "./components/ChatWidget";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/services" element={<Service />} />
      
        <Route path="/Aboutus" element={<About />} />
      </Routes>
      <ChatWidget />
    </div>
  );
}
