import Banner from "../../Components/Banner/Banner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Welcome() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
    sessionStorage.setItem("clicked", true);
  };

  useEffect(() => {
    const token = sessionStorage.getItem("clicked");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <Banner onExit={() => {}} onClick={handleButtonClick} />
    </>
  );
}

export default Welcome;
