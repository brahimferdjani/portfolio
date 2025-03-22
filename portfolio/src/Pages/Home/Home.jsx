import Cards from "../../Components/Cards/Cards";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import Clock from "../../Components/Clock/Clock";
import "./Home.scss";

function Home() {
  return (
    <>
      <div className="container">
        <>
          <Nav />
          <Cards />
          <Footer children={<Clock />} className={"footer"} />
        </>
      </div>
    </>
  );
}
export default Home;
