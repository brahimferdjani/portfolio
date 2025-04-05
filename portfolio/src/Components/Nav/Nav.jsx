import "./Nav.scss";
import { Link, useLocation } from "react-router-dom";
function Nav() {
  const location = useLocation();

  const menuItems = [
    { path: "/menu", name: "Menu" },
    { path: "/about", name: "About" },
    { path: "/works", name: "Projects" },
    { path: "/contact", name: "Contact" },
  ];

  const samePath = menuItems.filter((path) => path.path === location.pathname);
  console.log(samePath);

  return (
    <>
      <nav className="nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                className={item.path === location.pathname ? "inactive" : ""}
                to={item.path}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
export default Nav;
