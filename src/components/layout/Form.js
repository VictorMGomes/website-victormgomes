import styles from "./Form.module.css";

export default function Form(props) {
    return (
        <form className={styles.form} onSubmit={props.onSubmit}>
             {props.children}
        </form>
    )  
}
