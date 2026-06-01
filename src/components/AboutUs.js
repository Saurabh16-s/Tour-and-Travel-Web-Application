import "./Aboutusstyles.css";

const Aboutus = () => {
  return (
    <div className="about-container">

      <h1>Our History</h1>

      <div className="history-section">

        <div className="founder-box">
          <img
            src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Founder"
            className="history-img"
          />
          <h3 className="founder-title">Founder</h3>
        </div>

        <div className="history-text">
          <p>
            Saurabh Singh, the founder of our travel agency, laid the foundation of this venture with a vision to provide reliable, comfortable, and affordable travel services. Since 2008, the agency has been dedicated to serving customers with trust, safety, and excellence.

Over the years, we have built strong experience in managing tours, transportation, and customized travel packages, ensuring every journey is smooth and memorable. From local trips to long-distance travel, our commitment has always been to deliver quality service and customer satisfaction.

Driven by passion and a deep understanding of travelers’ needs, Saurabh Singh has continuously worked towards improving services, expanding destinations, and maintaining high standards in the travel industry. His dedication and hands-on approach have helped establish our agency as a trusted name for reliable and hassle-free travel experiences.
          </p>

         
        </div>

      </div>

      <h1>Our Vision</h1>
      <p className="section-para">
        Our vision is to continue growing as a trusted and innovative travel agency, providing exceptional travel experiences for our customers. With every journey we plan, we aim to enhance our services, expand our destinations, and deliver comfort, safety, and reliability.

We are committed to continuously improving our travel solutions, offering well-organized tours, affordable packages, and personalized services that meet the diverse needs of travelers. By understanding customer expectations and embracing new trends in the travel industry, we strive to make every trip smooth, enjoyable, and memorable.
      </p>

      <h1>Our Mission</h1>
      <p className="section-para">
       Our mission is to provide safe, reliable, and comfortable travel services that meet the needs of every customer. We aim to deliver well-planned journeys, affordable packages, and hassle-free travel experiences that create lasting memories.

We are committed to maintaining high standards of service, ensuring punctuality, safety, and customer satisfaction in every trip we organize. Whether it’s local travel, tours, or long-distance journeys, our goal is to make travel simple, convenient, and enjoyable for everyone.

Through continuous improvement, dedication, and a customer-first approach, we strive to build long-term relationships and establish ourselves as a trusted name in the travel industry.
      </p>

    </div>
  );
};

export default Aboutus;
