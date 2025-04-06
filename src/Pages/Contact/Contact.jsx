import Footer from "../../Components/Footer/Footer";
import FormContact from "../../Components/FormContact/FormContact";
import Nav from "../../Components/Nav/Nav";
import Clock from "../../Components/Clock/Clock";

function Contact() {
  return (
    <>
      <Nav />
      <FormContact />
      <Footer children={<Clock />} className={"footer"} />
    </>
  );
}

export default Contact;
