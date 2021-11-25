import styles from "../layout/Skills.module.css";
import { FaServer, FaLaptopCode } from "react-icons/fa";
import { IconContext } from "react-icons";
import Translator from "../i18n/Translator";

export default function Skills() {
    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.skills_title}>
                <h2><Translator path="20"/></h2>
            </div>
        <IconContext.Provider value={{ color: "black", size: "50px"}}>
            <div className={styles.skills_cards}>
                <div className={styles.skills_card} >
                <FaServer />
                <h2><Translator path="21"/></h2>
                <p><Translator path="23"/></p>
            </div>
            <div className={styles.skills_card}>
                <FaLaptopCode />
                <h2><Translator path="22"/></h2>
                <p><Translator path="24"/></p>
            </div>
         </div>             
            </IconContext.Provider>        
      </section>
    )    
}
