import classNames from "classnames";
import { useRef, useState, useCallback} from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";

import useClickOutside from "../../hooks/useClickOutside";
import styles from "./ColorPicker.module.scss";

const ColorPicker = ({ label, color = "FFFFFF" }) => {
  const [isOpen, toggle] = useState(false);
  const popover = useRef();

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  return (
    <>
      <div className="label">{label}</div>
      <div className={classNames("d-flex", styles.picker)}>
        <div
          className={styles.swatch}
          style={{ backgroundColor: color }}
          onClick={() => toggle(true)}
        />
        <HexColorInput color={color} className="Polaris-TextField__Input"/>
        {isOpen && (
          <div className="popover" ref={popover}>
            <HexColorPicker color={color} onChange={onChange} />
          </div>
        )}
      </div>
    </>
  );
};

export default ColorPicker;
