import "./ScrollWindow.scss";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";

function ScrollWindow() {
  return (
    <>
      <div id="scroll" className="scroll_container">
        <div className="presentation_container">
          <p id="I">
            I am a junior web developer with expertise in React.js and
            JavaScript.
          </p>
          <p id="am">
            I have experience managing state with Redux and seamlessly
            integrating APIs for dynamic web applications.
          </p>
          <p id="then">
            Passionate about writing clean, maintainable code, I follow best
            practices to ensure high performance, accessibility, and SEO
            optimization. I also prioritize responsive design to deliver
            seamless user experiences across all devices.
          </p>
        </div>
        <div className="flex_one">
          <div className="skills_container">
            <p id="title_tech">Skills :</p>
            <ul>
              <li id="react">
                <FaReact size={30} color="#61DBFB" />
              </li>
              <li id="sass">
                <FaSass size={30} color="#CD6799" />
              </li>
              <li id="html">
                <FaHtml5 size={30} color="#E34C26" />
              </li>
              <li id="redux">
                <SiRedux size={30} />
              </li>
              <li id="js">
                <IoLogoJavascript size={30} color="#F7DF1E" />
              </li>
              <li id="adobe">
                <SiAdobephotoshop size={30} color="#3C327B" />
              </li>
              <li id="illustration">
                <SiAdobeillustrator size={30} color="#FBBB4D" />
              </li>
            </ul>
          </div>
          <div className="bars_container">
            <ul>
              <li id="react_bar">
                <div id="reactpercent">React: Intermediate</div>
              </li>
              <li id="sass_bar">
                <div id="sasspercent">Sass : Advanced</div>
              </li>
              <li id="artwork_bar">
                <div id="artworkpercent">Html5 : Advanced</div>
              </li>
              <li id="js_bar">
                <div id="jspercent">JavaScript : Intermediate</div>
              </li>
              <li id="redux_bar">
                <div id="reduxpercent">Redux : Intermediate</div>
              </li>
              <li id="photoshop_bar">
                <div id="photoshoppercent">Photoshop : Advanced</div>
              </li>
              <li id="illustrator_bar">
                <div id="illustratorpercent">Illustrator : Advanced</div>
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
