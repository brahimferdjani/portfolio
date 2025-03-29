import "./ScrollWindow.scss";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";

function ScrollWindow() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    let context = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(
        "#presentation_container, .bars_container, .lang_container,.education_container  ",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        }
      )
        .from("#title", {
          y: 50,
          opacity: 0,
          duration: 1,
        })
        .from("#I, #am, #then", {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
        })
        .from(".skills_container", {
          y: 50,
          opacity: 0,
          duration: 1,
          delay: 0.3,
        })
        .from("#react, #sass, #html, #redux, #js, #illustration, #adobe", {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
        })
        .from(
          "#react_bar, #sass_bar, #artwork_bar, #js_bar, #redux_bar, #photoshop_bar, #illustrator_bar",
          {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
          }
        )
        .from(
          "#reactpercent, #sasspercent, #artworkpercent, #jspercent, #reduxpercent, #photoshoppercent, #illustratorpercent",
          {
            width: 0,
            opacity: 0,
            duration: 1,
          }
        )
        .from("#title_lang", {
          y: 50,
          opacity: 0,
          duration: 0.8,
        })
        .from("#en, #fr", {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
        })
        .from("#title_edu", {
          y: 50,
          opacity: 0,
          duration: 0.8,
        })
        .from("#oc, #cl", {
          y: 50,
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
        <div className="presentation_container">
          <p id="I">I am a junior web developper.</p>
          <p id="am">
            Skilled in React.js and JavaScript, I can manage state with Redux,
            or exchange data with an API.
          </p>
          <p id="then">
            Passionate about clean code, best practices and a strong
            understanding of SEO, accessibility, and responsive design
          </p>
        </div>
        <div className="flex_one">
          <div className="skills_container">
            <p id="title_tech">Skills :</p>
            <ul>
              <li id="react">
                <FaReact size={30} />
              </li>
              <li id="sass">
                <FaSass size={30} />
              </li>
              <li id="html">
                <FaHtml5 size={30} />
              </li>
              <li id="redux">
                <SiRedux size={30} />
              </li>
              <li id="js">
                <IoLogoJavascript size={30} />
              </li>
              <li id="adobe">
                <SiAdobephotoshop size={30} />
              </li>
              <li id="illustration">
                <SiAdobeillustrator size={30} />
              </li>
            </ul>
          </div>
          <div className="bars_container">
            <ul>
              <li id="react_bar">
                <div className="react_bar">
                  <div id="reactpercent">React</div>
                </div>
              </li>
              <li id="sass_bar">
                <div className="sass_bar">
                  <div id="sasspercent">SASS</div>
                </div>
              </li>
              <li id="artwork_bar">
                <div className="artwork_bar">
                  <div id="artworkpercent">HTML5</div>
                </div>
              </li>
              <li id="js_bar">
                <div className="js_bar">
                  <div id="jspercent">JAVASCRIPT</div>
                </div>
              </li>
              <li id="redux_bar">
                <div className="redux_bar">
                  <div id="reduxpercent">REDUX</div>
                </div>
              </li>
              <li id="photoshop_bar">
                <div className="photoshop_bar">
                  <div id="photoshoppercent">Photoshop</div>
                </div>
              </li>
              <li id="illustrator_bar">
                <div className="illustrator_bar">
                  <div id="illustratorpercent">Illustrator</div>
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
          <div className="education_container">
            <p id="title_edu">Education :</p>
            <ul>
              <li id="oc">
                2023 - 2025 : Web Developper, OpenClassrooms, Paris, France
              </li>
              <li id="cl">
                2012 - 2015 : Graphic Design Certificate, Collège LaSalle
                International, Morocco, Marrakech
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScrollWindow;
