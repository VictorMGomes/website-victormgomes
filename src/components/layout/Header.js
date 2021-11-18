import { Link } from "react-router-dom";
export default function Header() {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
        </header> 
    )
}
