import styles from "./toggle.module.scss";

type ToggleProps = {
  enabled: boolean;
  size: string;
};

const Toggle = ({ enabled = true, size = "m" }: ToggleProps) => {

  return (
    <label className={`${styles.switch} ${styles[size]}`}>
      {enabled ? <input type="checkbox" /> : <input type="checkbox" disabled />}
      <span className={`${styles.slider} ${styles[size]}`}></span>
    </label>
  );
};

export default Toggle;