import { Outlet, Link } from "react-router-dom";
import './App.css';
function Navigation() {
  return (
    <>
      <nav  classname="link">
        <ul>

          <li >
            <Link to="/login"  class="link">Login</Link>
          </li>
          <li>
            <Link to="/app"  class="link" >To do app</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navigation;