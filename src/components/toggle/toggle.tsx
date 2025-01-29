import styles from "./toggle.module.css";

const Toggle = () => {
    return (
        <label className={styles.switch}>
            <input type="checkbox" />
            <span className={styles.slider}></span>
        </label>
    )
};

export default Toggle;