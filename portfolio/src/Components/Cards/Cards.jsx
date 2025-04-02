import "./Cards.scss";
import { useNavigate } from "react-router-dom";

function Cards() {
  const navigate = useNavigate();

  const handleExitContact = () => {
    navigate("/contact");
  };

  const HandleExitWorks = () => {
    navigate("/works");
  };

  const HandleExitAboutme = () => {
    navigate("/about");
  };

  return (
    <>
      <div className="cards_box">
        <div className=" card card_aboutme">
          <button type="button" onClick={HandleExitAboutme}>
            About me
          </button>
        </div>
        <div className="card card_projects">
          <button type="button" onClick={HandleExitWorks}>
            Projects
          </button>
        </div>
        <div className="card card_contact">
          <button type="button" onClick={handleExitContact}>
            Contact
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards;
