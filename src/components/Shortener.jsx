import React from "react";

function Shortener() {
  return (
    <section className="shortener-container">
      <input type="text" placeholder="Shorten a link here..." />
      <button className="cta">Shorten it!</button>
    </section>
  );
}

export default Shortener;
