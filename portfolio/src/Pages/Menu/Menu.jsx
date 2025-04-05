import Cards from "../../Components/Cards/Cards";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import Clock from "../../Components/Clock/Clock";

function Menu() {
  return (
    <>
      <Nav />
      <Cards />
      <Footer children={<Clock />} />
    </>
  );
}
export default Menu;
