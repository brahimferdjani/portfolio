import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Nav/Nav";
import ProjectComponents from "../../Components/ProjectComponents/ProjectComponents";
import Clock from "../../Components/Clock/Clock";

function Works() {
  return (
    <div className="container">
      <Nav />
      <ProjectComponents />
      <Footer children={<Clock />} className={"footer"} />
    </div>
  );
}

export default Works;
