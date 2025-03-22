import "./Nav.scss";
import { Link, useLocation } from "react-router-dom";
function Nav({ hidden }) {
  const location = useLocation();

  const menuItems = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/works", name: "Projects" },
    { path: "/contact", name: "Contact" },
  ];

  if (hidden)
    return (
      <>
        <nav></nav>
      </>
    );

  return (
    <>
      <nav className="nav">
        <ul>
          {menuItems
            .filter((item) => item.path !== location.pathname)
            .map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
        </ul>
      </nav>
    </>
  );
}
export default Nav;
