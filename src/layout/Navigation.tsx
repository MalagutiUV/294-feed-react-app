import { NavLink } from "react-router";

function Navigation() {
  return (
    <nav className='flex gap-4'>
      <NavLink className='navLinkItem' to='/welcome' end>
        Welcome Page
      </NavLink>
      <NavLink className='navLinkItem' to='/map'>
        Map Page
      </NavLink>
      <NavLink className='navLinkItem' to='/users'>
        Users Page
      </NavLink>

      <NavLink className='navLinkItem' to='/rooms'>
        Rooms
      </NavLink>
      <NavLink className='navLinkItem' to='/feed'>
        Feed
      </NavLink>

      <NavLink className='navLinkItem' to='/profile'>
        UserProfile
      </NavLink>
    </nav>
  );
}

export default Navigation;
