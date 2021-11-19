import styles from "./Introduction.module.css";
import introImg from "../../img/me.jpg"
export default function HomeAboutInfo() {
    return(
        <section id="about-me" className={styles.intro}>
                <img src={introImg} alt="Face of Victor M. Gomes" className={styles.intro_img}/>
                    <h1>Hello World, it's me</h1>
                        <p>I am a technology enthusiast in general.</p> 
                        <p>I am currently very interested in Linux systems and some topics related to software development.</p>
        </section>
    )    
}