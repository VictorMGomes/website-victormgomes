import styles from "./PageTitle.module.css";

export default function PageTitle(props) {
    return(
        <div id={props.id} className={styles.pagetitle}>
            <h1> {props.content} </h1>         
        </div>
    )    
}