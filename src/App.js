import NavBar from "./Components/NavBar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ServicesPage from "./Pages/ServicesPage";
import Book from "./Pages/Book";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/book" element={<Book />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
