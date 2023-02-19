import bgImage from "../assets/images/bg-boost-mobile.svg";

function Banner() {
  return (
    <section className="banner-container">
      <h4>Boost your links today</h4>
      <button className="cta">Get Started</button>
      <img src={bgImage} alt="light purple bubble clouds as tinted behind the content" />
    </section>
  );
}

export default Banner;
