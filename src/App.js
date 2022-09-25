import NavBar from "./Components/NavBar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Services from "./Pages/ServicesPage";
import Book from "./Pages/Book";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </div>
  );
};

export default App;
