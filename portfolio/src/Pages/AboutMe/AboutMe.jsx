import Footer from "../../Components/Footer/Footer";
import ScrollWindow from "../../Components/ScrollWindow/ScrollWindow";
import "../Home/Home.scss";
import Nav from "../../Components/Nav/Nav";
import Clock from "../../Components/Clock/Clock";

function AboutMe() {
  return (
    <>
      <div className="container">
        <Nav />
        <ScrollWindow />
        <Footer children={<Clock />} className={"footer"} />
      </div>
    </>
  );
}

export default AboutMe;
