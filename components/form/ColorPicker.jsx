import classNames from "classnames";
import { useRef, useState, useCallback } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";

import useClickOutside from "../../hooks/useClickOutside";
import styles from "./ColorPicker.module.scss";

const ColorPicker = ({ label, defaultColor = "FFFFFF" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(defaultColor);
  const popover = useRef();
  const [focused, setFocused] = useState(false); 

  const close = useCallback(() => setIsOpen(false), []);
  useClickOutside(popover, close);

  return (
    <>
      <div className="label form-field">{label}</div>
      <div className={classNames("d-flex", styles.picker, focused && styles.isFocused)}>
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
          onChange={setColor}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {isOpen && (
          <div className={styles.popover} ref={popover}>
            <HexColorPicker color={color} onChange={setColor} />
          </div>
        )}
      </div>
    </>
  );
};

export default ColorPicker;
