import { projectsDetails } from "../../Data/Data";
import { useState } from "react";
import "./ProjectComponents.scss";

function ProjectComponents() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [title, setTitle] = useState("");

  const renderSwitch = (params) => {
    return params.map((param) => {
      switch (param) {
        case "React":
          return <i className="fa-brands fa-react"></i>;
        case "Sass":
          return <i className="fa-brands fa-sass"></i>;
        case "HTML5":
          return <i className="fa-brands fa-html5"></i>;
        case "Javascript":
          return <i className="fa-brands fa-js"></i>;
        case "NodeJs":
          return <i className="fa-brands fa-node-js"></i>;
        case "CSS":
          return <i className="fa-brands fa-css3-alt"></i>;
        default:
          return null;
      }
    });
  };

  const handleTitle = (index) => {
    setCurrentIndex(index);
    setTitle(projectsDetails[index].title);
  };

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
    <div className="project_box">
      <button
        id="close"
        className="close"
        type="button"
        onClick={() => setTitle("")}
      >
        Close
      </button>
      <p className="projectCount">
        {currentIndex + 1}/{projectsDetails.length}
      </p>
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
    <div className="project_box_two">
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
