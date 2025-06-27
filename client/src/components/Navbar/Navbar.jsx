import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li> <a href='#'>Home</a></li>
        <li><a href="#bouquets">Bouquets</a></li>
        <li><a href="/Keychains">Keychains</a></li>
        <li><a href="#neckchains">Neckchains</a></li>
        <li><a href="#bracelets">Bracelets</a></li>
        <li><a href="#bagcharms">Bag Charms</a></li>
        <li><a href="#phonecharms">Phone Charms</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
