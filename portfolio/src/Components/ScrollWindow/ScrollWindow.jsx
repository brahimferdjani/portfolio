import "./ScrollWindow.scss";

function ScrollWindow() {
  return (
    <>
      <div id="scroll" className="scroll_container">
        <div className="presentation_container">
          <p id="I">
            I am a junior web developer with expertise in React.js and
            JavaScript. <br /> I have experience managing state with Redux and
            seamlessly integrating APIs for dynamic web applications. <br />{" "}
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
                <i className="fa-brands fa-react"></i>{" "}
              </li>
              <li id="sass">
                <i className="fa-brands fa-sass"></i>{" "}
              </li>
              <li id="html">
                <i className="fa-brands fa-html5"></i>
              </li>
              <li id="js">
                <i className="fa-brands fa-js"></i>
              </li>
              <li id="adobe">
                <i className="fa-brands fa-css3-alt"> </i>
              </li>
            </ul>
          </div>
          <div className="bars_container">
            <ul>
              <li id="react_bar">
                <div id="reactpercent">React: Intermediate</div>
              </li>
              <li id="react_bar">
                <div id="reactpercent">CSS : Advanced</div>
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
