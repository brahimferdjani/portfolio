import "./Cards.scss";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

function Cards({ onExit }) {
  const ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
      }
    );
  }, []);

  const navigate = useNavigate();

  const handleExitContact = () => {
    const tl = gsap.timeline({
      onComplete: onExit, // Trigger new component after animation
    });

    tl.to(ref.current, { x: -100, opacity: 0, duration: 0.3 }); // Move right & fade out
    navigate("/contact");
  };

  const HandleExitWorks = () => {
    const tl = gsap.timeline({
      onComplete: onExit, // Trigger new component after animation
    });

    tl.to(ref.current, { x: -100, opacity: 0, duration: 0.3 }); // Move right & fade out
    navigate("/works");
  };

  const HandleExitAboutme = () => {
    const tl = gsap.timeline({
      onComplete: onExit, // Trigger new component after animation
    });

    tl.to(ref.current, { x: -100, opacity: 0, duration: 0.3 }); // Move right & fade out
    navigate("/about");
  };

  return (
    <>
      <div ref={ref} className="cards_box">
        <div className=" card card_aboutme">
          <button type="button" onClick={HandleExitAboutme}>
            About me
          </button>
        </div>
        <div className="card card_projects">
          <button type="button" onClick={HandleExitWorks}>
            Projects
          </button>
        </div>
        <div className="card card_contact">
          <button type="button" onClick={handleExitContact}>
            Contact
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards;
