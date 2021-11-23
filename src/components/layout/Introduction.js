import Translator from "../i18n/Translator";
import styles from "./Introduction.module.css";
import developer_img  from "../../img/developer.svg";

export default function Introduction() {
    return (
        <section id="introduction" className={styles.introduction}>
            <div className={styles.introduction_call}>
                    <img src={developer_img} alt="A person programming" className={styles.img} />          
                <h2 className={styles.img_desc}> 
                    <Translator path="15"/> 
                    <span> <Translator path="16"/></span>
                </h2>
            </div>
            <div className={styles.introduction_content}>
                <p> <Translator path="8"/> </p>
                <p> <Translator path="9"/> </p>
                <p> <Translator path="10"/> </p>
                <p> <Translator path="11"/> </p>
                <p> <Translator path="12"/> </p>
                    <a href="https://github.com/VictorMGomes" target="_blank" rel="noreferrer"> https://github.com/VictorMGomes</a>
                <p> <Translator path="13"/> </p>
                    <a href="mailto:info@victormgomes.net" target="_blank" rel="noreferrer"> info@victormgomes.net</a>
                <p> <Translator path="14"/> </p>
                    <a href="https://victormgomes.net" target="_blank" rel="noreferrer"> https://victormgomes.net</a>
            </div>
        </section>
    )        
}
