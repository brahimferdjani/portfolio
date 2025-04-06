import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Pages/Menu/Menu";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Works from "./Pages/Works/Works";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
