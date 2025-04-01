import "./Banner.scss";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();

  const handleExit = () => {
    sessionStorage.setItem("clicked", true);
    navigate("/");
  };
  return (
    <>
      <div id="container">
        <div className="banner">
          <h1 id="title">Hi, I'm Brahim</h1>
          <p id="description">
            A Frontend Developer also Graphic Designer, and I love to create
            beautiful and functional websites.
          </p>
          <button
            id="buttonWelcome"
            className="buttonHome"
            type="button"
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
