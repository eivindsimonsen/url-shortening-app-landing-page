import bgImage from "../assets/images/bg-boost-mobile.svg";
import bgImageDesktop from "../assets/images/bg-boost-desktop.svg";

function Banner() {
  return (
    <section className="banner-container">
      <h4>Boost your links today</h4>
      <button className="cta">Get Started</button>
      <img className="banner-container-img-mobile" src={bgImage} alt="light purple bubble clouds as tinted behind the content" />
      <img className="banner-container-img-desktop" src={bgImageDesktop} alt="light purple bubble clouds as tinted behind the content" />
    </section>
  );
}

export default Banner;
