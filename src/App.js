import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ServicesPage from "./Pages/ServicesPage";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
