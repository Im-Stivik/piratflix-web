import './Navbar.css'

function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav-group">
        <li>menu</li>
        <li>piratflix</li>
      </ul>
      <ul className="nav-group">
        <li>home</li>
        <li>favorites</li>
      </ul>
      <ul className="nav-group">
        <li>search</li>
        <li>user</li>
      </ul>
    </nav>
  );
}

export default Navbar;
