import recogImage from "../assets/images/icon-brand-recognition.svg";
import recorImage from "../assets/images/icon-detailed-records.svg";
import custImage from "../assets/images/icon-fully-customizable.svg";

function Stats() {
  return (
    <section className="stats-container">
      <div className="stats-container-title">
        <h2>Advanced Statistics</h2>
        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </div>
      <div className="stats-container-points">
        <div>
          <img src={recogImage} alt="Brand recognition icon" />
          <h3>Brand Recognition</h3>
          <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
        </div>
        <div>
          <img src={recorImage} alt="Detailed records icon" />
          <h3>Detailed Records</h3>
          <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
        </div>
        <div>
          <img src={custImage} alt="Customizable icon" />
          <h3>Fully Customizable</h3>
          <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
