import { projectsDetails } from "../../Data/Data";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./ProjectComponents.scss";
import { useEffect } from "react";
import { useRef } from "react";
import { gsap } from "gsap";

function ProjectComponents() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
  const currentProject = projectsDetails[currentIndex];

  return (
    <div ref={ref} className="project_box">
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
        <ul className="description">
          {currentProject.description.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
        <ul className="link">
          {currentProject.link.map((link, index) => (
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
  );
}

export default ProjectComponents;
