import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ServicesPage from "./Pages/ServicesPage";
import Footer from "./Components/Footer";
import Terms from "./Pages/TermsAndConditions";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
