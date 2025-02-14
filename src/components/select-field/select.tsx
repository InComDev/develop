"use client";

import { useState } from "react";
import styles from "./select.module.scss";
import Chevron_up from "@/shared/assets/icons/feather-icon _ chevron-up.svg";
import Chevron_down from "@/shared/assets/icons/feather-icon _ chevron-down.svg";
import X from "@/shared/assets/icons/feather-icon _ x.svg";

type SelectProps = {
  active: boolean;
  size: "s" | "l";
  initOpt: string[];
  placeholder: string;
  sides: "one" | "both";
};

const Select = ({
  active = true,
  size = "l",
  initOpt = ["1", "2", "3"],
  placeholder = "Placeholder",
  sides = "one",
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
            {sides === "both" ? (
              <span>{appear ? <Chevron_up /> : <Chevron_down />}</span>
            ) : (
              ""
            )}
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
            <span onClick={handleToggleDropdown}>
              {appear ? <Chevron_up /> : <Chevron_down />}
            </span>
          </div>
          <div
            style={appear ? { display: "inline-block" } : { display: "none" }}
            className={styles.dropdown}
          >
            {initOpt.map((item: string, idx: number) => (
              <div
                key={idx}
                onClick={() => handleAdd(item)}
                className={
                  options.find((el) => el === item)
                    ? `${styles.option} ${styles.choosed} ${sides === "both" ? styles.optBoth : ""}`
                    : sides === "both" ? `${styles.optBoth} ${styles.option}` : styles.option
                }
              >
                { sides === "both" ? <Chevron_up /> : ""} {item}
              </div>
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
                    {item} <span><X /></span>
                  </div>
                ))
              )}
            </div>
            <span>
              <Chevron_down />
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Select;
