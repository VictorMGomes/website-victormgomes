import Translator from "../i18n/Translator";
import styles from "./Person.module.css";
import person_img from "../../img/me.jpg";

export default function Person() {
    return (
    <div id="person" className={styles.person}>
                <img src={person_img} alt="Face of Victor M. Gomes" className={styles.img}/>
                    <h1> <Translator path="5"/> </h1>
                    <p> <Translator path="6"/> </p> 
                    <p> <Translator path="7"/> </p>
    </div> 
    )   
}
