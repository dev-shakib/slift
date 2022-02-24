import { InlineError } from "@shopify/polaris";
import classNames from "classnames";
import { useRef, useState, useCallback } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";

import useClickOutside from "../../hooks/useClickOutside";
import styles from "./ColorPicker.module.scss";

const ColorPicker = ({ name, label, color, onChange, error }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const popover = useRef();

  const close = useCallback(() => setIsOpen(false), []);
  useClickOutside(popover, close);

  return (
    <>
      <div className="label form-field">{label}</div>
      <div
        className={classNames(
          "d-flex",
          styles.picker,
          focused && styles.isFocused,
          !!error && styles.hasError
        )}
      >
        <div className={styles.swatchContainerstyles}>
          <div
            className={styles.swatch}
            style={{ backgroundColor: color }}
            onClick={() => setIsOpen(true)}
          />
        </div>
        <HexColorInput
          color={color}
          className={styles.input}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {isOpen && (
          <div className={styles.popover} ref={popover}>
            <HexColorPicker color={color} onChange={onChange} />
          </div>
        )}
        {!!error && <InlineError message={error} fieldID={name} />}
      </div>
    </>
  );
};

export default ColorPicker;
