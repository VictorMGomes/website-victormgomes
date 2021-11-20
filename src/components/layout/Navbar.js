import { useTranslation } from "react-i18next";
import Abutton from "./Abutton";

function Navbar(){
    const {t} = useTranslation();
    return (
    <nav>
        <ul className="list">
            <Abutton toref="/" tlang={t('1')}/>
            <Abutton toref="/about" tlang={t('2')}/>
            <Abutton toref="/projects" tlang={t('3')}/>
            <Abutton toref="/contact" tlang={t('4')}/>
        </ul>
    </nav> 
    )
}

export default Navbar;
