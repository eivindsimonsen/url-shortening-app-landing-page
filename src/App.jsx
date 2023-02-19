import "./sass/style.scss";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Shortener from "./components/Shortener";
import Stats from "./components/Stats";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Nav />
        <Hero />
        <Shortener />
        <Stats />
      </div>
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
