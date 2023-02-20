import { useState } from "react";
import bgImage from "../assets/images/bg-shorten-mobile.svg";
import bgImageDesktop from "../assets/images/bg-shorten-desktop.svg";

function Shortener() {
  // Define the component's state using the `useState` hook
  const [longUrl, setLongUrl] = useState(""); // Current long URL value in the input field
  const [shortUrl, setShortUrl] = useState(""); // Current short URL value after calling the API
  const [urls, setUrls] = useState([]); // Array of objects containing long and short URLs added to the output list
  const [addCopied, setAddCopied] = useState(false); // Boolean state for when the "Copy" button is clicked
  const [copiedIndex, setCopiedIndex] = useState(-1); // Index of the most recently copied short URL
  const [errorClasses, setErrorClasses] = useState(false); // If true, error validation is displayed

  // Async function that calls the shrtcode API and sets the component's state based on the response
  const shortenUrl = async () => {
    try {
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`);
      const data = await response.json();

      // This code updates the shortUrl and the dom, without it the site breaks if nothing is fetched from the input
      setShortUrl(data.result.short_link);
      setUrls((prevUrls) => [...prevUrls, { longUrl, shortUrl: data.result.short_link }]);
      setLongUrl("");
      setErrorClasses(false);
    } catch (error) {
      setErrorClasses(true);
    }
  };

  // Function that copies the short URL to clipboard, sets the copied state, and resets it after a delay
  const copyToClipboard = (index) => {
    navigator.clipboard.writeText(urls[index].shortUrl);
    setAddCopied(true);
    setCopiedIndex(index);
    setTimeout(() => {
      setAddCopied(false);
    }, 8000);
  };

  // Function that handles form submission and calls the `shortenUrl` function
  const handleSubmit = (event) => {
    event.preventDefault();
    shortenUrl();
  };

  // Function that handles input field changes and sets the `longUrl` state
  const handleLongUrlChange = (event) => {
    setLongUrl(event.target.value);
  };

  // The component's JSX code
  return (
    <div className="shortener">
      <form onSubmit={handleSubmit} className="shortener-container">
        <input className={errorClasses ? "input-error" : ""} type="text" placeholder="Shorten a link here..." value={longUrl} onChange={handleLongUrlChange} />
        <div className={errorClasses ? "input-error-message-mobile" : "input-error-hidden"}>{errorClasses ? "Please add a valid link" : ""}</div>
        <button type="submit" className="cta">
          Shorten it!
        </button>
        <div className={errorClasses ? "input-error-message-desktop" : "input-error-hidden"}>{errorClasses ? "Please add a valid link" : ""}</div>
        <img className="shortener-container-bg-image-mobile" src={bgImage} alt="light purple bubble clouds as tinted behind the content" />
        <img className="shortener-container-bg-image-desktop" src={bgImageDesktop} alt="light purple bubble clouds as tinted behind the content" />
      </form>
      {urls.map((url, index) => (
        <section key={url.longUrl} className="output-links">
          <div className="output-links-added">{url.longUrl}</div>
          <hr />
          <div className="output-links-rendered">{url.shortUrl}</div>
          <button onClick={() => copyToClipboard(index)} className={addCopied && index === copiedIndex ? "cta cta-copied" : "cta"}>
            {addCopied && index === copiedIndex ? "Copied!" : "Copy"}
          </button>
        </section>
      ))}
    </div>
  );
}

export default Shortener;
