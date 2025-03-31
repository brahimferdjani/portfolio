import { projectsDetails } from "../../Data/Data";
import { useState } from "react";
import "./ProjectComponents.scss";
import { useEffect } from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { SiReactrouter } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { DiResponsive } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";

function ProjectComponents() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [title, setTitle] = useState("");

  const renderSwitch = (params) => {
    return params.map((param, index) => {
      switch (param) {
        case "React":
          return <FaReact size={30} key={index} />;
        case "Sass":
          return <FaSass size={30} key={index} />;
        case "HTML5":
          return <FaHtml5 size={30} key={index} />;
        case "Redux":
          return <SiRedux size={20} key={index} />;
        case "Javascript":
          return <IoLogoJavascript size={30} key={index} />;
        case "Responsive":
          return <DiResponsive size={40} key={index} />;
        case "NodeJs":
          return <FaNodeJs size={30} key={index} />;
        case "Router":
          return <SiReactrouter size={30} key={index} />;
        case "ReactRouter":
          return <SiReactrouter size={30} key={index} />;
        default:
          return "unknown";
      }
    });
  };

  const handleTitle = (index) => {
    setCurrentIndex(index);
    setTitle(projectsDetails[index].title);
  };

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

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectsDetails.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsDetails.length - 1 : prevIndex - 1
    );
  };
  const currentProject = projectsDetails[title ? currentIndex : 0];

  return title ? (
    <div ref={ref} className="project_box">
      <button
        id="close"
        className="close"
        type="button"
        onClick={() => setTitle("")}
      >
        Back
      </button>
      <div className="image_box">
        {projectsDetails.length > 1 && (
          <button
            className="arrows"
            type="button"
            id="prev"
            onClick={prevProject}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        )}

        <img id="image" src={currentProject.cover} alt={currentProject.title} />

        <button
          className="arrows"
          type="button"
          id="next"
          onClick={nextProject}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div className="description_box">
        <h1 className="title">{currentProject.title}</h1>
        <p>{currentProject.undertitle}</p>
        <ul className="description">
          {renderSwitch(projectsDetails[currentIndex].technologies).map(
            (technologie, index) => (
              <li key={index}>{technologie}</li>
            )
          )}
        </ul>
        {currentProject.description && <p>{currentProject.description}</p>}
        <ul className="link">
          {currentProject.link?.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.url}
              </a>
              <span>{link.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <div ref={ref} className="project_box_two">
      <div className="link_box">
        <ul className="link_project">
          {projectsDetails.map((project, index) => (
            <li key={project.title}>
              <button
                className="button_link"
                type="button"
                onClick={() => handleTitle(index)} // Pass the index
              >
                <img
                  className="image_link"
                  src={project.cover}
                  alt={project.title}
                />
              </button>
              <p>{project.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectComponents;
