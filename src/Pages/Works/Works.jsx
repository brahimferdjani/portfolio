import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Nav/Nav";
import ProjectComponents from "../../Components/ProjectComponents/ProjectComponents";
import Clock from "../../Components/Clock/Clock";

function Works() {
  return (
    <>
      <Nav />
      <ProjectComponents />
      <Footer children={<Clock />} className={"footer"} />
    </>
  );
}

export default Works;
