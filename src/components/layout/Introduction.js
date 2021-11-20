import styles from "./Introduction.module.css";
import introImg from "../../img/me.jpg";
import Translator from "../i18n/Translator";
export default function HomeAboutInfo() {
    return(
        <section id="about-me" className={styles.intro}>
                <img src={introImg} alt="Face of Victor M. Gomes" className={styles.intro_img}/>
                    <h1><Translator path="5"/></h1>
                        <p><Translator path="6"/></p> 
                        <p><Translator path="7"/></p>
        </section>
    )    
}