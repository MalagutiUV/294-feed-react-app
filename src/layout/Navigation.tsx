import { NavLink } from "react-router";

function Navigation() {
  return (
    <nav className='flex gap-4'>
      <NavLink className='navLinkItem' to='/welcome' end>
        <button className='btn'>Welcome Page</button>
      </NavLink>

      <NavLink className='navLinkItem' to='/feed'>
        <button className='btn'>Feed</button>
      </NavLink>

      <NavLink className='navLinkItem' to='/profile'>
        <button className='btn'>UserProfile</button>
      </NavLink>
      <NavLink className='navLinkItem' to='/auth/logout'>
        <button className='btn'>Logout</button>
      </NavLink>
      <NavLink className='navLinkItem' to='/auth/login'>
        <button className='btn'>Login</button>
      </NavLink>
    </nav>
  );
}

export default Navigation;
