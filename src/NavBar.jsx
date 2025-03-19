
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/profile" >My Profile</NavLink>
      <NavLink to="/projects" >My Projects</NavLink>
      <NavLink to="/about">About Me</NavLink>
    </nav>
  );
};

export default NavBar;