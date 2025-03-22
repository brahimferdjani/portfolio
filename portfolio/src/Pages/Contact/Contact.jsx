import Footer from "../../Components/Footer/Footer";
import FormContact from "../../Components/FormContact/FormContact";
import Nav from "../../Components/Nav/Nav";
import Clock from "../../Components/Clock/Clock";

function Contact() {
  return (
    <>
      <div className="container">
        <>
          <Nav />
          <FormContact />
          <Footer children={<Clock />} className={"footer"} />
        </>
      </div>
    </>
  );
}

export default Contact;
