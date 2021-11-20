import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import '../../i18n';

function Navbar(){
    const {t} = useTranslation();
    return (
    <nav>
        <ul className="list">
            <li> <Link to="/">{t('1')}</Link> </li>
            <li> <Link to="/about">{t('2')}</Link> </li>
            <li> <Link to="/projects">{t('3')}</Link> </li>
            <li> <Link to="/contact">{t('4')}</Link> </li>
        </ul>
    </nav> 
    )
}

export default Navbar;
