import { Link } from "react-router-dom";

export default function Navbar() {
    return (
    <nav>
        <ul className="list">
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/about">About</Link> </li>
            <li> <Link to="/projects">Project</Link> </li>
            <li> <Link to="/contact">Contact</Link> </li>
        </ul>
    </nav> 
    )
}