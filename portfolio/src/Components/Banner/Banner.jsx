import "./Banner.scss";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();

  const handleExit = () => {
    sessionStorage.setItem("clicked", true);
    navigate("/menu");
  };
  return (
    <>
      <div>
        <div className="banner">
          <h1>Hi, I'm Brahim</h1>
          <p>
            A Frontend Developer also Graphic Designer, and I love to create
            beautiful and functional websites.
          </p>
          <button
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
