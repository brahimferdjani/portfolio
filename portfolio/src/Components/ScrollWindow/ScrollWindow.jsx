import "./ScrollWindow.scss";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useEffect } from "react";

function ScrollWindow() {
  const ref = useRef(null);
  const tlRef = useRef(null); // Store timeline reference

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

  useLayoutEffect(() => {
    let context = gsap.context(() => {
      const tl = gsap.timeline();
      tlRef.current = tl; // Store timeline in ref

      tl.to("#title_one", {
        opacity: 0,
        duration: 1,
        delay: 1.5,
        x: -100,
        display: "none",
      })
        .to(".geometry", { display: "block" })
        .from(["#vertical", "#square", "#circle", "#horizontal"], {
          opacity: 0,
          display: "block",
          stagger: 0.3,
        })
        .to("#vertical", {
          x: 350,
          y: -150,
          duration: 1,
          backgroundColor: "orange",
        })
        .to("#square", {
          x: -490,
          y: 205,
          duration: 1,
          backgroundColor: "rgb(0, 115, 255)",
        })
        .to("#circle", {
          x: -430,
          y: -175,
          duration: 1,
          backgroundColor: "rgb(0, 115, 255)",
        })
        .to("#horizontal", {
          x: 350,
          y: 165,
          duration: 1,
          backgroundColor: "orange",
        })
        .to(["#vertical", "#horizontal", "#square", "#circle"], {
          opacity: 0,
          display: "none",
          stagger: 0.6,
        })
        .from(".geometry", { display: "none" })
        .from("#title_three", {
          display: "block",
          x: 100,
          opacity: 0,
          delay: 1.2,
        })
        .to("#title_three", {
          opacity: 0,
          duration: 1,
          delay: 1.5,
          x: -200,
          display: "none",
        })
        .to(["#dove_one", "#dove_three"], {
          y: "+=80",
          x: "-=20",
          duration: 0.8,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          color: "orange",
        })
        .to([".animation", "#dove_one", "#dove_two", "#dove_three"], {
          display: "block",
        })
        .to("#dove_two", {
          y: "-=80",
          x: "+=20",
          duration: 0.7,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          color: "rgb(0, 115, 255)",
        })
        .to(".animation", {
          opacity: 0,
          duration: 2,
          delay: 1.3,
          x: 100,
          display: "none",
        })
        .to(".end", { display: "block" })
        .from(["#p_one", "#p_two"], {
          x: "+=20",
          opacity: 0,
          duration: 1,
          stagger: 1.5,
        })
        .to("#p_two", {
          scale: 1.5,
          fontWeight: 800,
          color: "orange",
          duration: 1.3,
          ease: "power1.inOut",
        })
        .to(["#p_one", "#p_two"], {
          x: "-=20",
          opacity: 0,
          duration: 1,
          delay: 0.5,
          stagger: 0.5,
        })
        .to(".end", { opacity: 0, duration: 1, x: -100, display: "none" })
        .from(".restart", { display: "block", opacity: 0, duration: 0.4 })
        .from(".skills_container", {
          opacity: 0,
          display: "none",
          duration: 0.4,
          delay: 0.8,
        });
    }, ref);

    return () => context.revert();
  }, []);

  // Function to skip animation
  const skipAnimation = () => {
    if (tlRef.current) {
      tlRef.current.progress(1); // Jump to the end
    }
  };

  return (
    <>
      <button id="skip" type="button" onClick={skipAnimation}>
        Skip
      </button>
      <div ref={ref} id="scroll" className="scroll_container">
        <p className="title" id="title_one">
          Rendering,
        </p>
        <div className="geometry">
          <div id="vertical"></div>
          <div id="horizontal"></div>
          <div id="square"></div>
          <div id="circle"></div>
        </div>
        <p id="title_three">ANIMATION,</p>
        <div className="animation">
          <i id="dove_one" className="fa-solid fa-dove"></i>
          <i id="dove_two" className="fa-solid fa-dove"></i>
          <i id="dove_three" className="fa-solid fa-dove"></i>
        </div>
        <div className="end">
          <p id="p_one">And a touch of...</p>
          <p id="p_two">Fun !</p>
        </div>
        <div className="restart">
          <button
            type="button"
            onClick={() => window.location.reload()}
            id="button"
          >
            Restart ?
          </button>
          <i id="face" className="fa-solid fa-face-smile"></i>
          <div className="skills_container">
            <p id="title_skills">Skills :</p>
            <ul>
              <li id="react">React</li>
              <li id="dessin">Graphic Design</li>
              <li id="logo">Logo</li>
              <li id="illustration">Artwork</li>
              <li id="adobe">Adobe Photoshop/ Illustrator</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScrollWindow;
