import "./Footer.scss";

function Footer({ children }) {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        {children}
        <p>Copyright © {year} Brahim Ferdjani</p>
      </footer>
    </>
  );
}
export default Footer;
