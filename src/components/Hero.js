import "./Herostyles.css";

function Hero(props) {
  return (
    <div className={props.cName}>
      <img src={props.heroimg} alt="HeroImage" />

      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>

        <a
          href="#"
          className={props.btnClass}
          onClick={(e) => {
            e.preventDefault();        // ⭐ prevents page reload
            if (props.onClick) props.onClick(); 
          }}
        >
          {props.buttonText}
        </a>
      </div>
    </div>
  );
}

export default Hero;
