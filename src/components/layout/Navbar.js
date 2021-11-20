import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import '../../i18n';

function Navbar(){
    const {t} = useTranslation();
    return (
    <nav>
        <ul className="list">
            <li> <Link to="/">{t('home')}</Link> </li>
            <li> <Link to="/about">{t('about')}</Link> </li>
            <li> <Link to="/projects">Projects</Link> </li>
            <li> <Link to="/contact">Contact</Link> </li>
        </ul>
    </nav> 
    )
}

export default Navbar;
