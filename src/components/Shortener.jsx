import bgImage from "../assets/images/bg-shorten-mobile.svg";
import bgImageDesktop from "../assets/images/bg-shorten-desktop.svg";

function Shortener() {
  return (
    <div className="shortener">
      <section className="shortener-container">
        <input className="input-error" type="text" placeholder="Shorten a link here..." />
        <div className="input-error-message">Please add a link</div>
        <button className="cta">Shorten it!</button>
        <img className="shortener-container-bg-image-mobile" src={bgImage} alt="light purple bubble clouds as tinted behind the content" />
        <img className="shortener-container-bg-image-desktop" src={bgImageDesktop} alt="light purple bubble clouds as tinted behind the content" />
      </section>
      <section className="output-links">
        <div>https://megalinkadded.com</div>
        <hr />
        <div>https://newmegalinkgiven</div>
        <button className="cta">Copy</button>
      </section>
    </div>
  );
}

export default Shortener;
