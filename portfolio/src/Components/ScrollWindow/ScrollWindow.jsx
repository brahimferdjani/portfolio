import "./ScrollWindow.scss";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

function ScrollWindow() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    let context = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".skills_container", {
        y: 100,
        opacity: 0,
        duration: 1,
      })
        .from("#react, #dessin, #logo, #illustration, #adobe", {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
        })
        .from(".bars_container", {
          y: 100,
          opacity: 0,
          duration: 1,
        })
        .from("#react_bar, #artwork_bar, #photoshop_bar, #illustrator_bar", {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
        })
        .from("#lang_container", {
          y: 100,
          opacity: 0,
          duration: 1,
        })
        .from("#title_lang", {
          y: 100,
          opacity: 0,
          duration: 1,
        })
        .from("#en, #fr", {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
        });
    }, ref);

    return () => context.revert();
  }, []);

  return (
    <>
      <div ref={ref} id="scroll" className="scroll_container">
        <div className="skills_container">
          <p id="title_tech">Skills :</p>
          <ul>
            <li id="react">React</li>
            <li id="dessin">Graphic Design</li>
            <li id="logo">Logo</li>
            <li id="illustration">Artwork</li>
            <li id="adobe">Adobe Photoshop/ Illustrator</li>
          </ul>
        </div>
        <div className="bars_container">
          <ul>
            <li id="react_bar">
              <div className="react_bar">
                <div>React</div>
              </div>
            </li>
            <li id="artwork_bar">
              <div className="artwork_bar">
                <div>Artwork</div>
              </div>
            </li>
            <li id="photoshop_bar">
              <div className="photoshop_bar">
                <div>Photoshop</div>
              </div>
            </li>
            <li id="illustrator_bar">
              <div className="illustrator_bar">
                <div>Illustrator</div>
              </div>
            </li>
          </ul>
        </div>
        <div className="lang_container">
          <p id="title_lang">Languages :</p>
          <ul>
            <li id="en">English</li>
            <li id="fr">Français</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ScrollWindow;
