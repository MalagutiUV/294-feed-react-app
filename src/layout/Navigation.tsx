import { NavLink } from "react-router";

function Navigation() {
  return (
    <nav className='flex gap-4'>
      <NavLink className='navLinkItem' to='/welcome' end>
        <button className='btn btn-neutral'>Welcome Page</button>
      </NavLink>

      <NavLink className='navLinkItem' to='/feed'>
        <button className='btn btn-neutral'>Feed</button>
      </NavLink>

      <NavLink className='navLinkItem' to='/profile'>
        <button className='btn btn-neutral'>UserProfile</button>
      </NavLink>
      <NavLink className='navLinkItem' to='/auth/logout'>
        <button className='btn btn-neutral'>Logout</button>
      </NavLink>
      <NavLink className='navLinkItem' to='/auth/login'>
        <button className='btn btn-neutral'>Login</button>
      </NavLink>
    </nav>
  );
}

export default Navigation;
