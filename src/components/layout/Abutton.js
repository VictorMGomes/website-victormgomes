import { Link } from "react-router-dom";
import styles from "../layout/Abutton.module.css";

function Abutton(props){
    return <li className={styles.abutton}> <Link to={props.toref}>{props.tlang}</Link> </li>
}

export default Abutton;
