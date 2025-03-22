import "./Footer.scss";

function Footer({ children, className, hidden }) {
  if (hidden)
    <>
      <footer></footer>
    </>;

  return (
    <>
      <footer className={className}>
        {children}
        <p>Copyright © 2023 Brahim Ferdjani</p>
      </footer>
    </>
  );
}
export default Footer;
