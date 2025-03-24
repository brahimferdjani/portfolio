import "./Footer.scss";

function Footer({ children }) {
  return (
    <>
      <footer className="footer">
        {children}
        <p>Copyright © 2023 Brahim Ferdjani</p>
      </footer>
    </>
  );
}
export default Footer;
