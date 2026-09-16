import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyMelophile from "./components/WhyMelophile";
import Courses from "./components/Courses";
import Teachers from "./components/Teachers";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Instruments from "./components/Instruments";
import StudentReviews from "./components/StudentReviews";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";

function Home() {
  return (
    <>
      <Header />

      <main id="top">
        <Hero />
        <Instruments />
        <WhyMelophile />
        <Courses />
        <Teachers />
        <StudentReviews />
        <Blog />
        <Pricing />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  );
}

export default App;