import image from "../assets/images/illustration-working.svg";

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-container-image">
        <img src={image} alt="" />
      </div>
      <div className="hero-container-content">
        <h1>More than just shorter links</h1>
        <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <button className="cta">Get Started</button>
      </div>
    </section>
  );
}

export default Hero;
