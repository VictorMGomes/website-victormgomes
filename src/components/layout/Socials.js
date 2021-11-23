import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import styles from "./Socials.module.css";
export default function Socials() {
    return (
        <nav>
            <IconContext.Provider value={{ color: "white", size: "2em"}}>
                    <a href="https://www.linkedin.com/in/victormgomes/"target="_blank" rel="noreferrer" className={styles.socials}>
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/VictorMGomes" target="_blank" rel="noreferrer" className={styles.socials}>
                        <FaGithub/>
                    </a>
                    <a href="mailto:info@victormgomes.net" target="_blank" rel="noreferrer" className={styles.socials}>
                        <FiMail/>
                    </a> 
            </IconContext.Provider>  
        </nav>       
    )    
}
