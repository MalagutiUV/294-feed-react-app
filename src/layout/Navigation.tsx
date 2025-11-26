import { NavLink } from "react-router";
import "./Navigation.css";

function Navigation() {
  return (
    <nav id='nav'>
      <NavLink className='navLinkItem' to='/welcome' end>
        Welcome Page
      </NavLink>
      <NavLink className='navLinkItem' to='/map'>
        Map Page
      </NavLink>
      <NavLink className='navLinkItem' to='/users'>
        Users Page
      </NavLink>
    </nav>
  );
}

export default Navigation;
