// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="wave-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
        alt="wave"
        className="wave-image"
      />
      <h1 className="wave-heading">Wave</h1>
    </div>
    <ul className="nav-item-list">
      <li className="list">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="list">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="list">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
