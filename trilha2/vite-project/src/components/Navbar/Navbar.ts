import './navbar.css'

export function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-link">Home</a>
      <a href="#about" className="nav-link">About</a>
      <a href="#contact" className="nav-link">Contact</a>
    </nav>
  )
}