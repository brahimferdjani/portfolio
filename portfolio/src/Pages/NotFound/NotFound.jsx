import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import Clock from "../../Components/Clock/Clock";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.scss";

function NotFound({ initialSeconds = 3 }) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const navigate = useNavigate();

  useEffect(() => {
    if (secondsLeft > 0) {
      const timeout = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 3000);
      return () => clearTimeout(timeout);
    } else if (secondsLeft === 0) {
      navigate("/");
    }
  }, [secondsLeft, navigate]);
  return (
    <>
      <Nav />
      <div className="not_found">
        <h1>404</h1>
        <p>Page not found</p>
        <p>redirecting to home page in {secondsLeft} seconds... </p>
      </div>
      <Footer children={<Clock />} className={"footer"} />
    </>
  );
}

export default NotFound;
