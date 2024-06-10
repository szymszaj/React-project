import React from "react";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SingUpForm from "./components/SingUpForm";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <SingUpForm />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
