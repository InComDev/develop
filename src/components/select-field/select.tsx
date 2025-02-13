"use client";

import { useState } from "react";
import styles from "./select.module.scss";

type SelectProps = {
  active: boolean;
  size: "s" | "l";
  initOpt: string[];
  placeholder: string;
};

const Select = ({
  active = true,
  size = "l",
  initOpt = ["1", "Renault", "Mercedes"],
  placeholder = "Placeholder",
}: SelectProps) => {
  // Массив выбранных опций
  const [options, setOptions] = useState<string[]>([]);

  // Показ дропменю
  const [appear, setAppear] = useState(false);

  const handleAdd = (el: string) => {
    setOptions(
      options.find((item) => item === el)
        ? options.filter((item) => item !== el)
        : [...options, el]
    );
  };

  const handleDel = (el: string) => {
    setOptions(options.filter((item) => item !== el));
  };

  const handleToggleDropdown = () => {
    setAppear(!appear);
  };

  return (
    <>
      {active ? (
        <div className={`${styles.selectField} ${styles[size]}`}>
          <div className={styles.cont}>
            <div className={styles.inputField}>
              {options.length === 0 ? (
                <div className={styles.placeholder}>{placeholder}</div>
              ) : (
                options.map((item: string, idx: number) => (
                  <div className={styles.option} key={idx}>
                    {item} <span onClick={() => handleDel(item)}>X</span>
                  </div>
                ))
              )}
            </div>
            <span onClick={handleToggleDropdown}>{appear ? "⬆" : "⬇"}</span>
          </div>
          <div
            style={appear ? { display: "inline-block" } : { display: "none" }}
            className={styles.dropdown}
          >
            {initOpt.map((item: string, idx: number) => (
              <p
                key={idx}
                onClick={() => handleAdd(item)}
                className={
                  options.find((el) => el === item)
                    ? `${styles.option} ${styles.choosed}`
                    : styles.option
                }
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <div className={`${styles.selectField} ${styles[size]} ${styles.disabledField}`}>
          <div className={styles.cont}>
            <div className={styles.inputField}>
              {options.length === 0 ? (
                <div className={styles.placeholder}>{placeholder}</div>
              ) : (
                options.map((item: string, idx: number) => (
                  <div className={styles.option} key={idx}>
                    {item} <span>X</span>
                  </div>
                ))
              )}
            </div>
            <span>⬇</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Select;
