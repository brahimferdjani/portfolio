import Footer from "../../Components/Footer/Footer";
import ScrollWindow from "../../Components/ScrollWindow/ScrollWindow";
import Nav from "../../Components/Nav/Nav";
import Clock from "../../Components/Clock/Clock";

function AboutMe() {
  return (
    <>
      <Nav />
      <ScrollWindow />
      <Footer children={<Clock />} className={"footer"} />
    </>
  );
}

export default AboutMe;
