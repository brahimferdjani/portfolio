import "./Banner.scss";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

function Banner() {
  const navigate = useNavigate();

  const ref = useRef(null);

  useLayoutEffect(() => {
    let contex = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".banner", {
        x: -500,
        opacity: 0,
        duration: 1,
        delay: 0.3,
      })
        .from("#title", {
          x: -500,
          opacity: 0,
          duration: 1,
          delay: 0.3,
        })
        .from("#description", {
          x: -500,
          opacity: 0,
          duration: 1,
          delay: 0.3,
        })
        .from("#button", {
          x: -500,
          opacity: 0,
          duration: 1,
          delay: 0.3,
        });
    }, ref);
    return () => {
      contex.revert();
    };
  }, []);

  const handleExit = () => {
    sessionStorage.setItem("clicked", true);
    navigate("/");
  };
  return (
    <>
      <div id="container" ref={ref}>
        <div className="banner">
          <h1 id="title">Hi, I'm Brahim</h1>
          <p id="description">
            I'm a Frontend Developer and Graphic Designer, I love to create
            beautiful and functional websites.
          </p>
          <button
            id="button"
            type="button"
            className="button"
            onClick={() => handleExit()}
          >
            Visit
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;
