import NavBar from "./Components/NavBar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ServicesPage from "./Pages/ServicesPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
