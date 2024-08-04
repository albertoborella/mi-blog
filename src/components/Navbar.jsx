import { Link } from "react-router-dom"
import './Styles.css'

const Navbar = () => {
  return (
    <nav className="Navbar">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/posteos">Posts</Link>
            </li>
            <li>
                <Link to="/crear">Crear</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar