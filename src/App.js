import "./App.css";
import Card from "./Cards/Card";
import Header from "./Header/Header";
import Navbar from "./Header/Navbar";
import Hero from "./Hero/Hero";
import Home from "./Home/Home";
import Product from "./Products/Product";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Hero />
      <Card />
      <Product />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
