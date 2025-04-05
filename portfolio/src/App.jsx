import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Pages/Menu/Menu";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Works from "./Pages/Works/Works";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/menu"
            element={
              <ProtectedRoute>
                <Menu />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <AboutMe />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/works"
            element={
              <ProtectedRoute>
                <Works />{" "}
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
