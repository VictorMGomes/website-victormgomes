import Abutton from "./Abutton";
import Translator from "../i18n/Translator";

function Navbar(){
    return (
    <nav>
        <ul className="list">
            <Abutton toref="/" tlang={<Translator path="1"/>}/>
            <Abutton toref="/about" tlang={<Translator path="2"/>}/>
            <Abutton toref="/projects" tlang={<Translator path="3"/>}/>
            <Abutton toref="/contact" tlang={<Translator path="4"/>}/>
        </ul>
    </nav> 
    )
}

export default Navbar;
